import { defineConfig } from "@playwright/test";

// Smoke test against the production build. Run `npm run build` first.
export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 15000,
  use: { baseURL: "http://127.0.0.1:4173" },
  webServer: {
    command: "npm run preview -- --host 127.0.0.1 --port 4173 --strictPort",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI,
  },
});
