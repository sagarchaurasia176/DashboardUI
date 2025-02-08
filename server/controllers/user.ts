import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { extractUserFromToken } from "../utils/extractUserFromToken";
import { attachCookiesToResponse } from "../utils/jwt";
import User from "../model/UserSchema";

// SignUp for custom authentication

export async function handleSignIn(req: Request, res: Response): Promise<void> {
  const { idToken } = req.body;
  try {
    const { email, name, picture } = await extractUserFromToken(idToken);
    const userAlreadyExists = await User.findOne({ email: email });
    if (userAlreadyExists) {
      attachCookiesToResponse(res, idToken);
      res.status(StatusCodes.OK).json({ msg: "Login success" });
      return;
    }
    const user = await User.create({
      name,
      email,
      picture,
    });
    if (!user) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: "Error, failed to save product in db" });
      return;
    }
    attachCookiesToResponse(res, idToken);
    res.status(StatusCodes.CREATED).json({ msg: "Login Sucess", user });
  } catch (error) {
    console.error("Error: ", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}
