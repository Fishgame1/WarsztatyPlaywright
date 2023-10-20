import { test as base } from "@playwright/test";
import { ToDoPage } from "core-capabilities/page-objects/to-do-page";
import playwrightObject from "./temp-playwright-object";

export const test = base.extend<{ initNew: void }>({
  initNew: async ({ browser, browserName }, testFunction) => {
    await playwrightObject.initNew({
      playwrightBrowser: browser,
      browserName: browserName,
    });
    await testFunction();
  },
});
