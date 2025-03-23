import fs from "fs";

export const getTLSConfig = () => {
  const TLS_KEY_PATH = process.env.TLS_KEY_PATH;
  const TLS_CERT_PATH = process.env.TLS_CERT_PATH;

  if (!TLS_KEY_PATH || !TLS_CERT_PATH) {
    throw new Error("TLS_KEY_PATH and TLS_CERT_PATH is required");
  }
  try {
    const options = {
      key: fs.readFileSync(TLS_CERT_PATH),
      cert: fs.readFileSync(TLS_KEY_PATH),
    };
    return options;
  } catch (error) {
    console.error("Error reading TLS files: ", error);
    throw new Error("Error reading TLS files");
  }
};
