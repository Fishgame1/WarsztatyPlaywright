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

  test(`SuperTest for browsers ${SMOKE_TEST}`, async ({ initNew }) => {
    // When
    let openPage = await toDoPage.open();
    await playwrightObject.openNewPage()
    await playwrightObject.closePage(1)
    await playwrightObject.switchPage(0)
    await playwrightObject.openNewTab()
    await playwrightObject.closeTab(1)
    await playwrightObject.switchTab(0)
    openPage = await toDoPage.open();
    let tasks = getTasks()[0];
    for (let task of tasks) {
      await toDoPage.addToDo(task);
    }

    // Then
    await toDoPage.validatePage(tasks);
  });
});
