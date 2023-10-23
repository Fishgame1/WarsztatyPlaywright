import playwrightObject from "core-capabilities/engine/playwright-object";
import { test } from "core-capabilities/engine/test-runner";
import { ToDoPage } from "core-capabilities/page-objects/to-do-page";
import { getToDoPageRequest } from "core-capabilities/steps/api/get-todos-page";

test.describe("Excercise 6", () => {

  test(`Send request`, async ({ initNew }) => {
    // Get request
    console.log((await (await getToDoPageRequest()).body()).toString())
  });

  test(`Catch request`, async ({ initNew }) => {
    // Catch request

    // Declare request
    const response = playwrightObject.page().waitForResponse((url) => url.url().includes('/todomvc/'));
    
    // Perform action
    let openPage = await new ToDoPage().open();

    // Wait for request to be returned
    console.log((await response).status())
    console.log((await (await response).body()).toString())
  });
});