import { getToDoPageRequest } from "core-capabilities/steps/api/get-todos-page";
import { ExtendedEnumElements } from "core-capabilities/extended-enum/extended-enum";
import playwrightObject from "core-capabilities/engine/playwright-object";
import { test } from "core-capabilities/engine/test-runner";
import { ToDoEntity } from "core-capabilities/entities/to-do-entity";
import { ToDoPage } from "core-capabilities/page-objects/to-do-page";
import { getRandomString } from "core-capabilities/utils/random/random-string-generator";

let firstTask: ToDoEntity = { taskName: "Make a webinar", isCompleted: false };
// let secondTask: ToDoEntity = { taskName: getRandomString(10), isCompleted: false };

test.describe("Check toDo page", () => {
  test.afterEach(async () => {
    await playwrightObject.page().close();
    // ExtendedEnumElements.FIRST.doSomething()
  });

  let toDoPage = new ToDoPage();

  for (let [index, value] of [firstTask].entries()) {
    test(`Send request ${index}`, async ({ initNew }) => {
      // Get request
      console.log((await (await getToDoPageRequest()).body()).toString())
    });

    test(`Catch request ${index}`, async ({ initNew }) => {
      // Catch request
      let openPage = toDoPage.open();
      const response = playwrightObject.page().waitForResponse((url) => url.url().includes('/todomvc/'));
      console.log((await (await response).body()).toString())
      await openPage
    });
  }
});
