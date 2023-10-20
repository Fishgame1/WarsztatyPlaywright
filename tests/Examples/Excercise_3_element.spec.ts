import { test, expect } from "@playwright/test";
import { Keys } from "core-capabilities/utils/keys";

test.describe("Check browser manipulation", () => {

  test.beforeAll(async () => {
     console.log('BEFORE!!')
  });


  test.afterEach(async () => {
    console.log('AFTER!!')
 });

  test("Here we will test the browser manipulation", async ({ page, context, browser, browserName }) => {
    console.log(browserName)
    await page.goto("https://demo.playwright.dev/todomvc");
    await page.locator('[class="new-todo"]').fill('new to do')
    await page.locator('[class="new-todo"]').press(Keys.ENTER)
    await page.locator('[class="filters"] li:nth-child(3)').click()

    let newContext = await browser.newContext();

    // New page
    await newContext.newPage()
  
    // Switch page
    browser.contexts()[1];
  
    // Close page
    await browser?.contexts()[1].close();
  });

  test("Here we will test the browser manipulation 2", async ({ page, context, browser, browserName }) => {
    console.log(browserName)
    await page.goto("https://demo.playwright.dev/todomvc");
    await page.locator('[class="new-todo"]').fill('new to do')
    await page.locator('[class="new-todo"]').press(Keys.ENTER)
    await page.locator('[class="filters"] li:nth-child(3)').click()

    let newContext = await browser.newContext();

    // New page
    await newContext.newPage()
  
    // Switch page
    browser.contexts()[1];
  
    // Close page
    await browser?.contexts()[1].close();
  });
});