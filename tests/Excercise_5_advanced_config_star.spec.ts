import { getExcerciseFiveTasks } from "excercises/Excercise-5-advanced-setup/excercise-5-data-provider";
import { test } from "excercises/Excercise-5-advanced-setup/excercise-5-test-runner";

test.describe("Excercise 5 additional scenario", () => {

  test.beforeAll(async ({}) => {
  });

  test.afterAll(async ({}) => {
  });
  
  for (let [index, entity] of getExcerciseFiveTasks().entries()) {
    test(`Here we will test the page object without sending the page ${index}`, async ({}) => {      
    });
  }
});