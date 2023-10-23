import playwrightObject from "core-capabilities/engine/playwright-object";
import { test } from "core-capabilities/engine/test-runner";

test.describe("Excercise 6", () => {

  test(`Send request`, async ({ initNew }) => {
    // Get request
  });

  test(`Catch request`, async ({ initNew }) => {
    // Catch request
    const response = playwrightObject.page().waitForResponse((url) => url.url().includes('/todomvc/'));
  });
});