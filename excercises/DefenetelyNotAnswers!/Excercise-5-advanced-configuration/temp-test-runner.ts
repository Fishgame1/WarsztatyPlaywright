import { test as base } from "@playwright/test";
import { ToDoPage } from "../Excercise-4-adding-page-objects-and-entities/to-do-page";
import playwrightObject from "./temp-playwright-object";

export const test = base.extend<{ initNew: ToDoPage}>({
  initNew: async ({ browser, browserName }, testFunction) => {
    await playwrightObject.initNew({
      playwrightBrowser: browser,
      browserName: browserName,
    });
    const toDoPage = new ToDoPage(playwrightObject.page());
    await testFunction(toDoPage);
  },
});
