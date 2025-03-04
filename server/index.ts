import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./connection/db";
import { rateLimit } from 'express-rate-limit'

// import route handlers
import { paymentRoutes, productRoutes, userRoutes } from "./routes/index";
import cookieParser from "cookie-parser";
import path from "path";
import { handleStripeWebhook } from "./controllers/payment";

// app - express()
const app = express();
app.use(helmet());
// Configure the Content-Security-Policy header.
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "example.com"],
    },
  })
);


// rate limiter
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)


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
// app.get("/api/v1/payment/events", sendEvents);

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(express.static(path.join(__dirname, "../app/dist")));

//route handlers
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/payment", paymentRoutes);

//error handler middleware
app.use(errorHandler);

const start = async () => {
  await connectDB(process.env.MONGODB_URI!);
  console.log("DB attached");
  app.listen(port, () => {
    console.log(`Server is listening on port: ${port}...`);
  });
};
start();
