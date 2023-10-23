import { expect, test } from "@playwright/test";
import { SMOKE_TEST } from "global-setup";

test.describe("Excercise 2 with test class", () => {

  test.afterEach(async ({page}) => {
    await page.close()
  });

  test(`First test ${SMOKE_TEST}`, async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle(/Playwright/);
  });

  test(`Second test`, async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Click the get started link.
    await page.getByRole("link", { name: "Get started" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole("heading", { name: "Installation" }),
    ).toBeVisible();
  });

  test("One way to decorate steps", async ({ page }) => {
  });
  

  test("Second way to decorate steps", async ({ page }) => {
  });
});