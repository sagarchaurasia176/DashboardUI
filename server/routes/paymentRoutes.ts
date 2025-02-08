import { Router } from "express";
import { createPaymentIntent } from "../controllers/payment";
import { authenticateUser } from "../middlewares/authenticateUser";

const router = Router();

router.post("/createPaymentIntent", authenticateUser, createPaymentIntent);

export default router;
