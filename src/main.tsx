import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "./globals.css";
import { App } from "./App";

// The build writes per-page head tags into each static HTML file for crawlers;
// <Seo /> re-adds them at runtime, so drop the static copies to avoid duplicates.
document.querySelectorAll("[data-static-head]").forEach((el) => el.remove());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
