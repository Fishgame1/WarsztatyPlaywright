import { test, expect } from "@playwright/test";

test.describe("Check own button", () => {

  test("Here we will test the button", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc");
  });
});