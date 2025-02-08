import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./connection/db";
// import route handlers
import { paymentRoutes, productRoutes, userRoutes } from "./routes/index";
import cookieParser from "cookie-parser";
import path from "path";
import { handleStripeWebhook } from "./controllers/payment";

const app = express();

const port = process.env.PORT || 4000;

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// Check it for stripe
app.use(
  "/api/v1/payment/webhook",
  express.raw({ type: "application/json" }),
  handleStripeWebhook
);
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(express.static(path.join(__dirname, "../app/dist")));

//route handlers
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/payment", paymentRoutes);

const start = async () => {
  await connectDB(process.env.MONGODB_URI!);
  console.log("DB attached");
  app.listen(port, () => {
    console.log(`Server is listening on port: ${port}...`);
  });
};

start();
