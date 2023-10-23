import { test as base } from "@playwright/test";
import excercise5PlaywrightObject from "./excercise-5-playwright-object";

export const test = base.extend<{ initNew: void }>({
  initNew: async ({ browser, browserName }, testFunction) => {
    await excercise5PlaywrightObject.initNew({
      playwrightBrowser: browser,
      browserName: browserName,
    });
    await testFunction();
  }
});
