import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { Stripe } from "stripe";
import { calculateOrderAmount } from "../utils/calculateOrder";
import Order from "../model/OrderSchema";
import User from "../model/UserSchema";
import Product from "../model/productSchema";
import { sendMailToQueue } from "../utils/sendMailToQueue";
import { stripe } from "../lib/stripe";
import {
  extractUserDetails,
  extractProductDetails,
} from "../utils/extractDetailsById";

export async function createPaymentIntent(
  req: Request,
  res: Response
): Promise<void> {
  const productId = req.body.items[0].id;
  const { email } = req.body.user;

  const userDetails = await User.findOne({ email: email }).lean();
  const userId: string | null = userDetails?._id
    ? userDetails?._id.toString()
    : null;

  if (!productId) {
    console.log("No product provided!");
    res.status(StatusCodes.BAD_REQUEST).json({ msg: "Please provide items" });
    return;
  }
  const amount = await calculateOrderAmount(productId);
  try {
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
    console.log(
      paymentIntent.metadata.userId,
      paymentIntent.metadata.productId
    );

    res.status(StatusCodes.OK).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Payment failed, please try again later" });
  }
}

export async function handleStripeWebhook(
  req: Request,
  res: Response
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

  try {
    let paymentIntent;
    let charge;

    switch (event.type) {
      case "payment_intent.created":
        paymentIntent = event.data.object as Stripe.PaymentIntent;
        const existingOrder = await Order.findOne({
          paymentIntentId: paymentIntent.id,
        });
        if (existingOrder) {
          console.log(`PaymentIntent already processed ${paymentIntent.id}`);
          res.json({ received: true });
          return;
        }
        try {
          await Order.create({
            amount: paymentIntent.amount,
            user: paymentIntent.metadata.userId,
            product: paymentIntent.metadata.productId,
            paymentIntentId: paymentIntent.id,
            status: paymentIntent.status,
          });
          console.log(`PaymentIntent was created ${paymentIntent.id}`);
        } catch (error) {
          console.log(error);
        }
        res.json({ received: true });
        return;
      case "payment_intent.succeeded":
        paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log(`PaymentIntent was successful ${paymentIntent.id}`);
        try {
          const orderAlreadyExists = await Order.findOne({
            paymentIntentId: paymentIntent.id,
          });
          if (orderAlreadyExists) {
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
              res
                .status(StatusCodes.BAD_REQUEST)
                .json({ msg: "Product not found" });
              return;
            }
            console.log(
              `Order updated successfully for PaymentIntent: ${paymentIntent.id}`
            );
            const { user, product } = orderAlreadyExists;
            const { email, name: userName } = await extractUserDetails(
              user as string
            );
            const { name: productName } = await extractProductDetails(
              product as string
            );
            sendMailToQueue({
              user: {
                name: userName,
                emailId: email as string,
              },
              payment: {
                amount: paymentIntent.amount,
                paymentId: paymentIntent.id,
                paymentDate: orderAlreadyExists.createdAt as string,
                product: productName,
              },
            });
            res.status(StatusCodes.OK).json({
              msg: "Payment success",
              productURL: productResponse.downloadURL,
            });
            return;
          }
          // if order doesnot exists, create one
          const order = await Order.create({
            amount: paymentIntent.amount,
            user: paymentIntent.metadata.userId,
            product: paymentIntent.metadata.productId,
            paymentIntentId: paymentIntent.id,
            status: paymentIntent.status,
          });
          const response = await Product.findById({
            _id: order.product,
          });
          if (!response) {
            res
              .status(StatusCodes.BAD_REQUEST)
              .json({ msg: "Product not found" });
            return;
          }
          console.log(
            `New order created for PaymentIntent: ${paymentIntent.id}`
          );
          const { user, product } = order;
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
          res
            .status(StatusCodes.OK)
            .json({ msg: "Payment success", productURL: response.downloadURL });
        } catch (error) {
          console.log(error);
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
        return;
      case "charge.succeeded":
        res.json({ received: true });
        return;
      case "charge.updated":
        res.json({ received: true });
        return;
      case "payment_intent.payment_failed":
        res.status(StatusCodes.BAD_REQUEST).json({ msg: "Payment failed" });
        break;
      case "payment_intent.canceled":
        res.status(StatusCodes.BAD_REQUEST).json({ msg: "Payment canceled" });
        break;
      case "payment_intent.processing":
        res.status(StatusCodes.OK).json({ msg: "Payment processing" });
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    res.json({ received: true });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error" });
  }
  res.json({ received: true });
}
