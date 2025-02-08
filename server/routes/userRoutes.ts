import { Router } from "express";
import { handleSignIn } from "../controllers/user";

const router = Router();

router.route("/signIn").post(handleSignIn);

export default router;
