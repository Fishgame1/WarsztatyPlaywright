import playwrightObject from "core-capabilities/engine/playwright-object";
import { test } from "core-capabilities/engine/test-runner";
import { ToDoPage } from "core-capabilities/page-objects/to-do-page";
import { getExcerciseEightTasks } from "./Examples/excercise-8-data-provider";

test.describe("Excercise 8", () => {

  let toDoPage = new ToDoPage()

  test.afterEach(async ({}) => {
    await playwrightObject.page().close()
  });
  
  for (let [index, toDoEntities] of getExcerciseEightTasks().entries()) {
    test(`Here we will see ho easy it can be ${index}`, async ({ initNew }) => {
      // Given
      await toDoPage.open()

      // When 
      await toDoPage.addMultipleEntities(toDoEntities)

      // Then
      await toDoPage.validatePage(toDoEntities)  
    });
  }
});