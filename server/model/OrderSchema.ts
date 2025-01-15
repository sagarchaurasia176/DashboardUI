import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  amount: {
    type: Number,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],
  },
  paymentIntentId: {
    type: String,
    required: [true, "Please provide payment intent id"],
  },
  status: {
    type: String,
    enum: ["succeeded", "processing", "required_payment_method", "default"],
    required: [true, "Please provide payment status"],
  },
  product: {
    type: String,
    required: [true, "Please provide product"],
  },
  // subTotal: {
  //   type: Number,
  //   required: [true, "Please provide subtotal"],
  // },
  // platformFees: {
  //   type: Number,
  //   required: [true, "Please provide platform fee"],
  //   default: 2,
  // },
});

const Order = model("Order", orderSchema);
export default Order;
