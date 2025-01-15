import { Router } from "express";
import { signIn } from "../controllers/user";

const router = Router();

router.route("/verify-token").post(signIn);

export default router;
