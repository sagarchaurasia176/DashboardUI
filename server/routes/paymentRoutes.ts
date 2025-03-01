import { Router } from "express";
import { createPaymentIntent, sendEvents } from "../controllers/payment";
import { authenticateUser } from "../middlewares/authenticateUser";

const router = Router();

router.post("/createPaymentIntent", authenticateUser, createPaymentIntent);
router.get("/events", authenticateUser, sendEvents);

export default router;
