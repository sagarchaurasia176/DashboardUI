import admin from "firebase-admin";
import {
  InternalServerError,
  NotFoundError,
  UnauthenticatedError,
} from "../errors";

const serviceAccount = process.env.FIREBASE_APPLICATION_CREDENTIALS!;
if (!serviceAccount) {
  throw new InternalServerError(
    "FIREBASE_AUTHENTICATION_CREDENTIALS not found"
  );
}
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount!),
});

export async function extractUserFromToken(token: string) {
  if (!token) {
    throw new UnauthenticatedError("No token found");
  }
  const userDetails = await admin.auth().verifyIdToken(token);
  if (!userDetails.email) {
    throw new NotFoundError("No email associated with this account");
  }
  const { email, name, picture } = userDetails;
  return { email, name, picture };
}
