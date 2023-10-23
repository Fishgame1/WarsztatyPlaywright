import playwrightObject from "core-capabilities/engine/playwright-object";
import { test } from "core-capabilities/engine/test-runner";
import { ToDoPage } from "core-capabilities/page-objects/to-do-page";

test.describe("Excercise 7", () => {

  test.afterEach(async () => {
    await playwrightObject.page().close();
  });

  let toDoPage = new ToDoPage();

    test(`Check accesibility - automatic check`, async ({ initNew }) => {
    });

    test(`Check accesibility - navigation`, async ({ initNew }) => {
    });
});
