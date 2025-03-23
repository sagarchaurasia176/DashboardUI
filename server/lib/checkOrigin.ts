type CustomOrigin = (
  requestOrigin: string | undefined,
  callback: (err: Error | null, origin?: boolean) => void
) => void;

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost",
  "http://localhost:5173",
];

export const checkAllowedOrigin: CustomOrigin = (requestOrigin, callback) => {
  console.log("Request origin: ", requestOrigin);
  if (!requestOrigin || allowedOrigins.includes(requestOrigin)) {
    console.log("Allowed origin: ", requestOrigin);
    callback(null, true);
  } else {
    console.log("Unallowed origin: ", requestOrigin);
    callback(new Error("Not allowed by CORS"));
  }
};
