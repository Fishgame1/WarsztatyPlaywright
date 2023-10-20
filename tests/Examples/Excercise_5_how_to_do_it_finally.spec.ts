import playwrightObject from "core-capabilities/engine/playwright-object";
import { test } from "core-capabilities/engine/test-runner";
import { ToDoPage } from "core-capabilities/page-objects/to-do-page";
import { getTasks } from "./data-provider";
import { SMOKE_TEST } from "global-setup";

test.describe("Final test", () => {

  test.afterEach(async () => {
    await playwrightObject.page().close();
  });

  let toDoPage = new ToDoPage();

  for (let [index, value] of getTasks().entries()) {
    test(`Final test case ${index} ${SMOKE_TEST}`, async ({ initNew }) => {
      // Given
      let openPage = await toDoPage.open();

      // When
      for (let task of value) {
        await toDoPage.addToDo(task);
      }

      // Then
      await toDoPage.validatePage(value);
    });
  }
});
