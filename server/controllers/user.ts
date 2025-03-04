import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { extractUserFromToken } from "../utils/extractUserFromToken";
import { attachCookiesToResponse } from "../utils/jwt";
import User from "../model/UserSchema";

// SignUp for custom authentication

export async function handleSignIn(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { idToken } = req.body;
    const { email, name, picture } = await extractUserFromToken(idToken);

    let user = await User.findOne({ email: email });

    // if user does not exist, create a new user
    if (!user) {
      user = await User.create({ name, email, picture });
    }

    attachCookiesToResponse(res, idToken);
    res.status(StatusCodes.OK).json({ msg: "Login Sucess", user });
  } catch (error) {
    next(error);
  }
}
