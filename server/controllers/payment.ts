import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import stripe from "stripe";
import { calculateOrderAmount } from "../utils/calculateOrder";
import Order from "../model/OrderSchema";
import User from "../model/UserSchema";
import Product from "../model/productSchema";

const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY!);

export async function checkoutOrder(
  req: Request,
  res: Response
): Promise<void> {
  const { items } = req.body;
  if (!items) {
    console.log("No items provided!");
    res.status(StatusCodes.BAD_REQUEST).json({ msg: "Please provide items" });
    return;
  }
  try {
    console.log(items, await calculateOrderAmount(items));

    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount: await calculateOrderAmount(items),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
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

export async function processPayment(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const {
      amount,
      status,
      intentId: paymentIntentId,
      user,
      product,
    } = req.body;
    // get userId
    const userDetails = await User.findOne({ email: user }).lean();
    // prevent duplication, check if details is already saved in db
    const paymentDetailsExists = await Order.findOne({
      paymentIntentId,
    });
    if (paymentDetailsExists) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Payment details already exists in database" });
      return;
    }
    const paymentDetails = await Order.create({
      amount,
      user: userDetails?._id,
      paymentIntentId,
      status,
      product,
    });
    if (paymentDetails.status !== "succeeded") {
      res.status(StatusCodes.PAYMENT_REQUIRED).json({
        msg: "Payment could not be completed, please try again later",
      });
      return;
    }
    const productDetails = await Product.findById({ _id: product });
    const paymentResponse = {
      product,
      downloadURL: productDetails?.downloadURL,
    };

    res.status(StatusCodes.CREATED).json(paymentResponse);
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Payment failed, please try again later" });
  }
}
