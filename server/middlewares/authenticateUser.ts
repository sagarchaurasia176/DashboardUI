import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { extractUserFromToken } from "../utils/extractUserFromToken";

export async function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const idToken = req.signedCookies.token;
    if (!idToken) {
      res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Unauthorized" });
      return;
    }
    const { email, name, picture } = await extractUserFromToken(idToken);
    req.body.user = { email, name, picture };
    next();
  } catch (error) {
    console.error("Error: ", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}
