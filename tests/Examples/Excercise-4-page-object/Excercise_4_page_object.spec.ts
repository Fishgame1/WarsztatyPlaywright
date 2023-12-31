import { test, expect } from "@playwright/test";
import { Keys } from "core-capabilities/utils/keys";
import { ToDoPage } from "excercises/DefenetelyNotAnswers!/Excercise-4-adding-page-objects-and-entities/to-do-page";
import { ToDoEntity } from "../temp-to-do-entity";

test.describe("Check page object", () => {

  test("Here we will test page object", async ({ page, context, browser, browserName }) => {
    // Given
    let entity: ToDoEntity = {taskName: 'abcd', isCompleted: false}
    let toDoPage: ToDoPage = new ToDoPage(page)

    // When 
    await toDoPage.open()
    await toDoPage.addToDo(entity)

    // Then
    await toDoPage.validatePage(entity)
  });
});