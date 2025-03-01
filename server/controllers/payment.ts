import Product from "../model/productSchema";
import Order from "../model/OrderSchema";
import User from "../model/UserSchema";
import { StatusCodes } from "http-status-codes";
import { NextFunction, Request, Response } from "express";
import { sendMailToQueue } from "../utils/sendMailToQueue";
import { stripe } from "../lib/stripe";
import { Stripe } from "stripe";
import { calculateOrderAmount } from "../utils/calculateOrder";
import {
  extractUserDetails,
  extractProductDetails,
} from "../utils/extractDetailsById";
import { BadRequestError, NotFoundError } from "../errors";

// remove User and Product models from this file

export async function createPaymentIntent(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const product = req.body.items;
    const { email } = req.body.user;

    if (!Array.isArray(product) || product.length === 0) {
      throw new BadRequestError(
        "Please provide product details to create payment Intent"
      );
    }
    const productId = product[0].id;

    if (!productId || !email) {
      throw new BadRequestError(
        "Please provide both productId and user email to create payment Intent"
      );
    }

    const userDetails = await User.findOne({ email: email }).lean();
    if (!userDetails) {
      throw new NotFoundError(`No user with email: ${email} exists`);
    }
    const userId = userDetails._id.toString();

    const amount = await calculateOrderAmount(productId);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        userId,
        productId,
      },
    });

    res.status(StatusCodes.OK).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    next(error); // Ensure any error is passed to the next handler
  }
}

interface event {
  userId: string;
  msg: string;
  productURL: string;
}

const clients: Response[] = [];
const pendingEvents: event[] = [];

export async function sendEvents(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log("New client connected");

    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });
    clients.push(res);

    // cookies to track users and assign events to userIds
    while (pendingEvents.length > 0) {
      const event = pendingEvents.shift();
      res.write(`data: ${JSON.stringify(event)}\n\n`);
    }

    req.on("close", () => {
      console.log("Client disconnected");
      clients.splice(clients.indexOf(res), 1);
      res.end();
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function handleStripeWebhook(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const sig = req.headers["stripe-signature"] as string;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err: any) {
    console.log(err);
    res
      .status(StatusCodes.BAD_REQUEST)
      .send(`Invalid signature: ${err.message}`);
    return;
  }
  let paymentIntent;

  switch (event.type) {
    case "payment_intent.created":
      console.log("***PaymentIntent created event***");

      try {
        console.log("PaymentIntent created");

        paymentIntent = event.data.object as Stripe.PaymentIntent;

        const orderAlreadyExists = await Order.findOne({
          paymentIntentId: paymentIntent.id,
        });
        if (orderAlreadyExists) {
          res.json({ received: true });
          return;
        }
        await Order.create({
          amount: paymentIntent.amount,
          user: paymentIntent.metadata.userId,
          product: paymentIntent.metadata.productId,
          paymentIntentId: paymentIntent.id,
          status: paymentIntent.status,
          createdAt: paymentIntent.created,
        });

        console.log(`PaymentIntent was created ${paymentIntent.id}`);
        res.json({ received: true });
      } catch (error) {
        next(error);
        console.log(error);
      }
      return;

    case "payment_intent.succeeded":
      paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log("***PaymentIntent succeeded event***");

      try {
        const orderAlreadyExists = await Order.findOne({
          paymentIntentId: paymentIntent.id,
        });
        if (orderAlreadyExists) {
          console.log("__Order found for this PaymentIntent___");

          if (orderAlreadyExists.status === "succeeded") {
            res.json({ received: true });
            return;
          }

          // if order exists, but is not yet succeeded, update it and mail user
          orderAlreadyExists.status = paymentIntent.status;
          await orderAlreadyExists.save();

          const productResponse = await Product.findById({
            _id: orderAlreadyExists.product,
          });
          if (!productResponse) {
            throw new NotFoundError(
              `Product with id:${orderAlreadyExists.product} not found`
            );
          }
          console.log(
            `Order updated successfully for PaymentIntent: ${paymentIntent.id}`
          );
          const { user, product } = orderAlreadyExists;
          const { email, name } = await extractUserDetails(user as string);
          const { name: productName } = await extractProductDetails(
            product as string
          );
          sendMailToQueue({
            user: {
              name: name,
              emailId: email as string,
            },
            payment: {
              amount: paymentIntent.amount,
              paymentId: paymentIntent.id,
              paymentDate: orderAlreadyExists.createdAt as string,
              product: productName,
            },
          });
          const paymentEvent = {
            userId: user as string, // userId
            msg: "Payment success",
            productURL: productResponse.downloadURL,
          };
          pendingEvents.push(paymentEvent);
          res.status(StatusCodes.OK).json({ recieved: true });
        } else {
          console.log("___No order found for this PaymentIntent___");

          // if order doesnot exists, create one
          const order = await Order.create({
            amount: paymentIntent.amount,
            user: paymentIntent.metadata.userId,
            product: paymentIntent.metadata.productId,
            paymentIntentId: paymentIntent.id,
            status: paymentIntent.status,
            createdAt: paymentIntent.created,
          });
          console.log(
            `New order created for PaymentIntent: ${paymentIntent.id}`
          );

          // send mail to user
          const response = await Product.findById({
            _id: order.product,
          });
          if (!response) {
            throw new NotFoundError(
              `Product with id: ${order.product} not found`
            );
          }
          const { name, email } = await extractUserDetails(
            order.user as string
          );
          const { name: productName } = await extractProductDetails(
            order.product as string
          );
          sendMailToQueue({
            user: {
              name,
              emailId: email as string,
            },
            payment: {
              amount: paymentIntent.amount,
              paymentId: paymentIntent.id,
              paymentDate: order.createdAt as string,
              product: productName,
            },
          });
          const paymentEvent = {
            userId: order.user as string, // userId
            msg: "Payment success",
            productURL: response.downloadURL,
          };
          pendingEvents.push(paymentEvent);
          res.status(StatusCodes.OK).json({ recieved: true });
        }
      } catch (error) {
        console.log(error);
        next(error);
      }
      return;

    case "charge.succeeded":
      res.json({ received: true });
      return;

    case "charge.updated":
      res.json({ received: true });
      return;

    case "payment_intent.payment_failed":
      throw new BadRequestError("Payment failed");

    case "payment_intent.canceled":
      throw new BadRequestError("Payment canceled");

    case "payment_intent.processing":
      res.status(StatusCodes.OK).json({ msg: "Payment processing" });
      break;

    case "checkout.session.expired":
      throw new BadRequestError("Checkout session expired");

    default:
      console.log(`Unhandled event type ${event.type}`);
  }
}
