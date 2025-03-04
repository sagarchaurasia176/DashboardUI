import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  amount: {
    type: Number,
    required: [true, "Please provide amount"],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],
  },
  paymentIntentId: {
    type: String,
    required: [true, "Please provide payment intent id"],
    unique: true,
  },
  status: {
    type: String,
    enum: [
      "succeeded",
      "processing",
      "requires_payment_method",
      "default",
      "canceled",
      "requires_capture",
      "requires_confirmation",
      "requires_action",
    ],
    required: [true, "Please provide payment status"],
  },
  product: {
    type: String,
    required: [true, "Please provide product"],
  },
  createdAt: {
    type: String,
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

// logic to convert epochmilliseconds from stripe object to date

// orderSchema.pre("save", function (next) {
//   if (this.isNew) {
//     const date = new Date();
//     this.createdAt = date.toLocaleString();
//   }
//   next();
// });

const Order = model("Order", orderSchema);

export default Order;
