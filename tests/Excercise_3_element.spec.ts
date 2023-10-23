import { test } from "@playwright/test";
import { Keys } from "core-capabilities/utils/keys";
import { getRandomString } from "core-capabilities/utils/random/random-string-generator";

test.describe("Excercise 3", () => {

  test.beforeEach(async ({page}) => {
    await page.goto("https://demo.playwright.dev/todomvc");
  });

  test.afterEach(async ({page}) => {
    await page.close()
  });

  test("Here we will test the active button", async ({ page }) => {
    // Given
    await page.locator('[class="new-todo"]').fill(getRandomString(10))
    await page.keyboard.press(Keys.ENTER);
  });

  test("Page navigation", async ({ browser, browserName }) => {
  });
});