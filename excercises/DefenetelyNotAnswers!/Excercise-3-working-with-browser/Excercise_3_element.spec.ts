import { test, expect } from "@playwright/test";
import { ButtonElement } from "excercises/Excercise-3-working-with-browser/button-element-ex-3";

test.describe("Check own button", () => {

  test("Here we will test the button", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc");
    await page.locator('[class="new-todo"]').fill('abcd')
    await page.keyboard.press('Enter');
    let button = new ButtonElement('[class="filters"] li:nth-child(2)', page, 'Active')
    await button.click()
    await button.validateElement()
    await page.pause()
  });
});