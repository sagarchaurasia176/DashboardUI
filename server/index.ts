import express from "express";
import stripe from "stripe";
import cors from "cors";
import { calculateOrderAmount } from "./utils/calculateOrder";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
app.use(
  cors({
    origin: "*",
  })
);
const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY!);
app.use(express.json());

app.post("/api/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  const paymentIntent = await stripeInstance.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}..`);
});
