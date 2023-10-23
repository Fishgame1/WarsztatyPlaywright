import excercise5PlaywrightObject from "excercises/Excercise-5-advanced-setup/excercise-5-playwright-object";
import { test } from "excercises/Excercise-5-advanced-setup/excercise-5-test-runner";

test.describe("Excercise 5", () => {

  test.afterEach(async ({}) => {
    // await excercise5PlaywrightObject.page().close()
  });
  
  test("Here we will test the page object without sending the page", async () => { 
  });
});