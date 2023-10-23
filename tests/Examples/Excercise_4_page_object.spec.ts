import { test } from "@playwright/test";
import { ExcerciseFourToDoPage } from "excercises/Excercise-4-adding-page-objects-and-entities/excercise-4-to-do-page";
import { getRandomString } from "core-capabilities/utils/random/random-string-generator";
import { ExcerciseFourToDoEntity } from "excercises/Excercise-4-adding-page-objects-and-entities/excercise-4-to-do-entity";

test.describe("Excercise 4", () => {

  test.afterEach(async ({page}) => {
    await page.close()
  });

  test("Here we will test the page object", async ({ page }) => {
    // Given
    let entity: ExcerciseFourToDoEntity = {taskName: getRandomString(10), isCompleted: false}
    let toDoPage: ExcerciseFourToDoPage = new ExcerciseFourToDoPage(page)

    // When 
    await toDoPage.open()
    await toDoPage.addToDo(entity)

    // Then
    await toDoPage.validatePage()  
  });
});