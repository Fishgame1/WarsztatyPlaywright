import { getExcerciseFiveTasks } from "excercises/Excercise-5-advanced-setup/excercise-5-data-provider";
import excercise5PlaywrightObject from "excercises/Excercise-5-advanced-setup/excercise-5-playwright-object";
import { test } from "excercises/Excercise-5-advanced-setup/excercise-5-test-runner";

test.describe("Excercise 5 additional scenario", () => {

  test.beforeAll(async ({initPageIfClosed, toDoPage}) => {
    await toDoPage.open()
  });

  test.afterAll(async ({}) => {
    await excercise5PlaywrightObject.page().close()
  });
  
  for (let [index, entity] of getExcerciseFiveTasks().entries()) {
    test(`Here we will test the page object without sending the page ${index}`, async ({ initPageIfClosed, toDoPage }) => {      
      // When 
      await toDoPage.addToDo(entity)

      // Then
      await toDoPage.validatePage()  
    });
  }
});