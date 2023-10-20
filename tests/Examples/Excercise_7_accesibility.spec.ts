import playwrightObject from "core-capabilities/engine/playwright-object";
import { test } from "core-capabilities/engine/test-runner";
import { ToDoPage } from "core-capabilities/page-objects/to-do-page";
import AxeBuilder from "@axe-core/playwright";
import { expect } from "playwright/test";
import { SMOKE_TEST } from "global-setup";

test.describe("Accesibility check", () => {

  test.afterEach(async () => {
    await playwrightObject.page().close();
  });

  let toDoPage = new ToDoPage();

    // test(`Check accesibility  ${SMOKE_TEST}`, async ({ initNew }) => {
    //   // Given
    //   await toDoPage.open();

    //   // When
    //   let page = playwrightObject.page();
    //   const accessibilityScanDetailedResults = await new AxeBuilder({ page })
    //       .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    //       .analyze();

    //   // Then
    //   expect(accessibilityScanDetailedResults.violations).toEqual([]);
    // });
});
