import { connect } from "mongoose";

export async function connectDB(url: string) {
  try {
    await connect(url, {
      dbName: "dashboard_ui",
    });
  } catch (error) {
    console.error("Error: ", error);
  }
}
