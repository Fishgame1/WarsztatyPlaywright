import { test as base } from "@playwright/test";
import { ToDoPage } from "core-capabilities/page-objects/to-do-page";
import playwrightObject from "./playwright-object";

export const test = base.extend<{ todoPage: ToDoPage, initNew: void }>({
  todoPage: async ({ browser, browserName, playwright }, testFunction) => {
    await playwrightObject.initNew({
      playwrightBrowser: browser,
      browserName: browserName,
      apiRequest: playwright.request,
    })
    const todoPage = new ToDoPage();
    await testFunction(todoPage);
  },

  initNew: async ({ browser, browserName, playwright }, testFunction) => {
    await playwrightObject.initNew({
      playwrightBrowser: browser,
      browserName: browserName,
      apiRequest: playwright.request,
    });
    await testFunction();
  },
});
