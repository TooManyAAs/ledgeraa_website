import { test, expect, type Page } from "@playwright/test";
import seo from "../../src/config/seo-pages.json" with { type: "json" };

function collectErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  return errors;
}

for (const { path, title } of seo.pages) {
  test(`renders ${path}`, async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto(path);
    await expect(page).toHaveTitle(title);
    await expect(page.locator("h1").first()).toBeVisible();
    expect(errors).toEqual([]);
  });
}

test("unknown path renders the 404 page", async ({ page }) => {
  await page.goto("/no-such-page");
  await expect(page).toHaveTitle(seo.notFound.title);
});
