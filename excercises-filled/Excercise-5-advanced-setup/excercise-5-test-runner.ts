import { test as base } from "@playwright/test";
import { ExcerciseFiveToDoPage } from "./excercise-5-to-do-page";
import excercise5PlaywrightObject from "./excercise-5-playwright-object";

export const test = base.extend<{ initNew: void, initPageIfClosed: void, toDoPage: ExcerciseFiveToDoPage }>({
  initNew: async ({ browser, browserName }, testFunction) => {
    await excercise5PlaywrightObject.initNew({
      playwrightBrowser: browser,
      browserName: browserName,
    });
    await testFunction();
  },

  initPageIfClosed: async ({ browser, browserName }, testFunction) => {
    await excercise5PlaywrightObject.initPageIfClosed({
      playwrightBrowser: browser,
      browserName: browserName,
    });
    await testFunction();
  },

  toDoPage: async ({}, testFunction) => {
    const toDoPage = new ExcerciseFiveToDoPage();
    await testFunction(toDoPage);
  },
});
