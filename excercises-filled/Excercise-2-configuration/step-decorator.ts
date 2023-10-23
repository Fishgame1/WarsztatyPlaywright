import { Page } from "playwright-core";
import {expect, test} from "@playwright/test"

export async function exampleDecoratedSteps(page: Page) {
    await test.step('Decorated steps inside step method', async () => {
        await page.goto("https://playwright.dev/");
        await expect(page).toHaveTitle(/Playwright/);
      });
}
