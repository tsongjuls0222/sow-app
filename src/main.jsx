import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "@/styles/globals.css";
import "@/styles/auth.css";
import "@/styles/dashboard.css";
import "@/styles/table.css";
import "@/styles/modal.css";
import "@/styles/responsive.css";
import "@/styles/transition.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);