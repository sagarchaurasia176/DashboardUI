import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { GlobalState } from "context/GloablaStateManage";
// import { GlobalStateManage } from './context/GloablaStateManage';
// context api
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
