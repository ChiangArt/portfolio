import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { PortafolioApp } from "./PortafolioApp";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PortafolioApp />
    </BrowserRouter>
  </StrictMode>
);
