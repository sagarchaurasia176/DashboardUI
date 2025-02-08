import admin from "firebase-admin";

const serviceAccount = require(process.env.FIREBASE_APPLICATION_CREDENTIALS!);
if (!serviceAccount) {
  throw new Error("FIREBASE_AUTHENTICATION_CREDENTIALS not found");
}
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount!),
});

export async function extractUserFromToken(token: string) {
  console.log(token);

  const userDetails = await admin.auth().verifyIdToken(token);
  if (!userDetails.email) {
    throw new Error("Unauthorized: No email associated with this account");
  }
  const { email, name, picture } = userDetails;
  return { email, name, picture };
}
