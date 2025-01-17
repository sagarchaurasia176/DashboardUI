import User from "../model/UserSchema";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import admin from "firebase-admin";
import fs from "fs";
import "dotenv/config";

const firebaseCredentialsJSON = Buffer.from(
  process.env.FIREBASE_APPLICATION_CREDENTIALS!,
  "base64"
).toString("utf8");
const serviceAccount = JSON.parse(firebaseCredentialsJSON);

// const serviceAccount = process.env.FIREBASE_APPLICATION_CREDENTIALS;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount!),
});

// SignUp for custom authentication

export async function signIn(req: Request, res: Response): Promise<void> {
  const { idToken } = req.body;
  if (!idToken) {
    res.status(400).json({ msg: "No idToken provided" });
    return;
  }
  try {
    const userDetails = await admin.auth().verifyIdToken(idToken);
    const { email, name, picture } = userDetails;
    const userAlreadyExists = await User.findOne({ email: email });
    if (userAlreadyExists) {
      res.status(StatusCodes.OK).json(userAlreadyExists);
      return;
    }
    // if user is not stored in db
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
    res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    console.error("Error: ", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}
