import { getRandomString } from "core-capabilities/utils/random/random-string-generator";
import { ExcerciseFourToDoEntity } from "excercises-filled/Excercise-4-adding-page-objects-and-entities/excercise-4-to-do-entity";
import excercise5PlaywrightObject from "excercises-filled/Excercise-5-advanced-setup/excercise-5-playwright-object";
import { test } from "excercises-filled/Excercise-5-advanced-setup/excercise-5-test-runner";

test.describe("Excercise 5", () => {

  test.afterEach(async ({}) => {
    await excercise5PlaywrightObject.page().close()
  });
  
  test("Here we will test the page object without sending the page", async ({ initNew, toDoPage }) => {
    // Given
    let entity: ExcerciseFourToDoEntity = {taskName: getRandomString(10), isCompleted: false}
    
    // When 
    await toDoPage.open()
    await toDoPage.addToDo(entity)

    // Then
    await toDoPage.validatePage()  
  });
});