import { test, expect } from "@playwright/test";
import { ExtendedEnumElements } from "./Examples/extended-enum";

test.describe("Check page object", () => {

  test("Here we will test the page object", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc");
  });
});