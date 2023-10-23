import { test } from "@playwright/test";
import { Keys } from "core-capabilities/utils/keys";
import { getRandomString } from "core-capabilities/utils/random/random-string-generator";
import { ExcerciseThreeButtonElement } from "excercises/Excercise-3-working-with-browser/excercise-3-button-element";

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
    let button = new ExcerciseThreeButtonElement('[class="filters"] li:nth-child(2)', page, 'Active')
    
    // When
    await button.click()

    // Then
    await button.validateElement()
  });

  test("Page navigation", async ({ browser, browserName }) => {
    // Before
    console.log(browser.browserType().name())
    console.log(browserName)
    console.log(browser.version())

    let secondContext = await browser.newContext()
    let secondPage = await secondContext.newPage()

    // Given
    await secondPage.goto("https://demo.playwright.dev/todomvc");
    await secondPage.locator('[class="new-todo"]').fill(getRandomString(10))
    await secondPage.keyboard.press(Keys.ENTER);
    let button = new ExcerciseThreeButtonElement('[class="filters"] li:nth-child(2)', secondPage, 'Active')
    
    // When
    await button.click()

    // Then
    await button.validateElement()
    secondPage.close()
  });
});