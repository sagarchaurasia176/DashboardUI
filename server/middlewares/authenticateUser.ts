import { Request, Response, NextFunction } from "express";
import { extractUserFromToken } from "../utils/extractUserFromToken";

export async function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const idToken = req.signedCookies.token;
    const { email, name, picture } = await extractUserFromToken(idToken);
    req.body.user = { email, name, picture };
    next();
  } catch (error) {
    next(error);
  }
}
