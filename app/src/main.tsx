import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "../ThemeContext";
import App from "./App";

const root = document.getElementById("root") as HTMLElement;
createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster />
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
