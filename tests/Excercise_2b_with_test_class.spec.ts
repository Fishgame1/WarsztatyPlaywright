import { test, expect } from "@playwright/test";
import { getRandomString } from "core-capabilities/utils/random/random-string-generator";
import { exampleDecoratedSteps } from "excercises/Excercise-2-configuration/step-decorator";
import { SMOKE_TEST } from "global-setup";

test.describe("Excercise 2 with test class", () => {

  test.afterEach(async ({page}) => {
    await page.close()
  });

  test(`First test ${SMOKE_TEST}`, async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle(/Playwright/);
  });

  for (let [index, value] of ['101', '2200', getRandomString(10)].entries()) {
    test(`Second test ${index}`, async ({ page }) => {
      await page.goto("https://playwright.dev/");

      // Click the get started link.
      await page.getByRole("link", { name: "Get started" }).click();

      // Expects page to have a heading with the name of Installation.
      await expect(
        page.getByRole("heading", { name: "Installation" }),
      ).toBeVisible();
    });
  }

  test("One way to decorate steps", async ({ page }) => {
    await test.step('Decorated steps inside test', async () => {
      await page.goto("https://playwright.dev/");
      await expect(page).toHaveTitle(/Playwright/);
    }); 
  });
  

  test("Second way to decorate steps", async ({ page }) => {
     await exampleDecoratedSteps(page)
  });
});