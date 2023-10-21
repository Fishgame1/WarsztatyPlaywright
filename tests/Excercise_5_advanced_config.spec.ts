import { ToDoPage } from "excercises/Excercise-4-adding-page-objects-and-entities/temp-to-do-page";
import tempPlaywrightObject from "excercises/Excercise-5-advanced-setup/temp-playwright-object";
import { test } from "excercises/Excercise-5-advanced-setup/temp-test-runner";
import { getTasks } from "./Examples/data-provider";

test.describe("Check advanced config", () => {
  
  for (let [index, value] of getTasks().entries()) {
    test(`Here we will test advanced config ${index}`, async ({ initPageIfClosed }) => {
      await tempPlaywrightObject.open("https://demo.playwright.dev/todomvc");
      let toDoPage = new ToDoPage(tempPlaywrightObject.page())
      await toDoPage.addToDo(value[0])
    });
  }
});