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
    methods: ["GET", "POST" , "PUT","UPDATE","DELETE"],
  })
);
const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY!);
app.use(express.json());

// Create-payment methods here to create payment
app.post("/api/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  if (!items) {
    console.log("No items provided!");
    res.status(400).json({ msg: "Please provide items" });
  }
  // PaymentIntent
  try {
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
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Payment failed, please try again later" });
  }
});

// Production
// This req only for checking that our backend give any resp or not in production
app.get('/' , (req,res)=>{
  res.send("Dashboard Backend live....")
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}..`);
});


