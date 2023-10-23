import playwrightObject from "core-capabilities/engine/playwright-object";
import { test } from "core-capabilities/engine/test-runner";
import { ToDoPage } from "core-capabilities/page-objects/to-do-page";
import AxeBuilder from "@axe-core/playwright";
import { expect } from "playwright/test";
import { getRandomString } from "core-capabilities/utils/random/random-string-generator";
import { pressEnter, writeSentence } from "core-capabilities/utils/keys";

test.describe("Excercise 7", () => {

  test.afterEach(async () => {
    await playwrightObject.page().close();
  });

  let toDoPage = new ToDoPage();

    test(`Check accesibility - automatic check`, async ({ initNew }) => {
      // Given
      await toDoPage.open();

      // When
      let page = playwrightObject.page();
      const accessibilityScanDetailedResults = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
          .analyze();

      // Then
      expect(accessibilityScanDetailedResults.violations).toEqual([]);
    });

    test(`Check accesibility - navigation`, async ({ initNew }) => {
      // Given
      await toDoPage.open();

      // When
      let page = playwrightObject.page();
      await writeSentence(getRandomString(10))
      await pressEnter()
    });
});
