import jwt from "jsonwebtoken";
import { Response } from "express";

export const attachCookiesToResponse = (res: Response, token: string) => {
  res.cookie("token", token, {
    httpOnly: true,
    // secure must be true in order to save cookie in browser with sameSite=None
    secure: process.env.NODE_ENV === "production" || true,
    signed: true,
    sameSite: "none",
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  });
};
