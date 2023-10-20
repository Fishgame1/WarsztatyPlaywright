import { test, expect } from "@playwright/test";
import { SMOKE_TEST } from "global-setup";

test.describe("Check toDo page", () => {

  test("has title", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle(/Playwright/);
  });

  for (let [index, value] of [1, 2, 3].entries()) {
    test(`Get started link ${SMOKE_TEST} ${index}`, async ({ page }) => {
      console.log(value)
      await page.goto("https://playwright.dev/");

      // Click the get started link.
      await page.getByRole("link", { name: "Get started" }).click();

      // Expects page to have a heading with the name of Installation.
      await expect(
        page.getByRole("heading", { name: "Installation" }),
      ).toBeVisible();
    });
  }
});