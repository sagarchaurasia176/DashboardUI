import express from "express";
import https from "https";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./connection/db";
import { paymentRoutes, productRoutes, userRoutes } from "./routes/index";
import cookieParser from "cookie-parser";
import { handleStripeWebhook } from "./controllers/payment";
import { errorHandler } from "./middlewares/error-handler";
import { checkAllowedOrigin } from "./lib/checkOrigin";
import { getTLSConfig } from "./lib/tlsConfig";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const app = express();
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'"],
    },
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

app.use(limiter);

app.use(
  cors({
    credentials: true,
    origin: checkAllowedOrigin,
  })
);

// stripe route
app.use(
  "/api/v1/payment/webhook",
  express.raw({ type: "application/json" }),
  handleStripeWebhook
);

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/payment", paymentRoutes);

// error handler
app.use(errorHandler);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    const options = getTLSConfig();
    await connectDB(process.env.MONGODB_URI!);
    console.log("DB attached");

    https.createServer(options, app).listen(port, () => {
      console.log(`Server is listening on port: ${port}...`);
    });
  } catch (error) {
    console.error("Internal Server Error: ", error);
  }
};
start();
