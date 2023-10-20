import playwrightObject from "core-capabilities/engine/playwright-object";
import { test } from "core-capabilities/engine/test-runner";

test.describe("Accesibility check", () => {

  test.afterEach(async () => {
    await playwrightObject.page().close();
  });

  test(`Check accesibility`, async ({ initNew }) => {
  });
});
