import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./connection/db";

// import route handlers
import { paymentRoutes, productRoutes, userRoutes } from "./routes/index";

const app = express();

const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
//route handlers
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/payment", paymentRoutes);

// Production
// This req only for checking that our backend give any resp or not in production

const start = async () => {
  await connectDB(process.env.MONGODB_URI!);
  console.log("DB attached");
  app.listen(port, () => {
    console.log(`Server is listening on port: ${port}...`);
  });
};

start();
