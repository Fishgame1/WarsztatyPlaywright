import { test as base } from "@playwright/test";
import playwrightObject from "./playwright-object";

export const test = base.extend<{ initNew: void }>({
  initNew: async ({ browser, browserName, playwright }, testFunction) => {
    await playwrightObject.initNew({
      playwrightBrowser: browser,
      browserName: browserName,
      apiRequest: playwright.request,
    });
    await testFunction();
  },
});
