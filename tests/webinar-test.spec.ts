import { SMOKE_TEST } from "../engine/config";
import { ExtendedEnumElements } from "../engine/extended-enum/extended-enum";
import playwrightObject from "../engine/playwright-object";
import { test } from "../engine/test-runner";
import { ToDoEntity } from "../entities/to-do-entity";
import { ToDoPage } from "../page-objects/to-do-page";
import { getRandomString } from "../random/random-string-generator";

let firstTask: ToDoEntity = { taskName: "Make a webinar", isCompleted: false };
// let secondTask: ToDoEntity = { taskName: getRandomString(10), isCompleted: false };

test.describe("Check toDo page", () => {
  test.afterEach(async () => {
    await playwrightObject.page().close();
    // ExtendedEnumElements.FIRST.doSomething()
  });

  let toDoPage = new ToDoPage();

  for (let [index, value] of [firstTask].entries()) {
    test(`SuperTest ${index} ${SMOKE_TEST}`, async ({ initNew }) => {
      // When
      await toDoPage.open();
      await playwrightObject.openNewPage()
      await playwrightObject.closePage(1)
      await playwrightObject.switchPage(0)
      await playwrightObject.openNewTab()
      await playwrightObject.closeTab(1)
      await playwrightObject.switchTab(0)
      let tasks = [firstTask];
      for (let task of tasks) {
        await toDoPage.addToDo(task);
      }

      // Then
      await toDoPage.validatePage(tasks);
    });
  }
});
