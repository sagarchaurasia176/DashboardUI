import { Router } from "express";
import { checkoutOrder, processPayment } from "../controllers/payment";
import { validatePaymentDetails } from "../middlewares/paymentMiddleware";

const router = Router();

router.post("/checkout", checkoutOrder);
router.route("/processPayment").post(validatePaymentDetails, processPayment);

export default router;
