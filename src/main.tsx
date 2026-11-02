import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import { App } from "./App";

// The build writes each page's title/meta tags into its static HTML for
// crawlers. React re-adds them from <Seo />, so drop the static copies first
// to avoid duplicates. (JSON-LD structured data is left in place.)
document
  .querySelectorAll("[data-static-head]")
  .forEach((el) => el.remove());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
