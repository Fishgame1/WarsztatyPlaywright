import { test, expect } from "@playwright/test";

test.describe("Check page object", () => {

  test("Here we will test the page object", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc");
    
  });
});