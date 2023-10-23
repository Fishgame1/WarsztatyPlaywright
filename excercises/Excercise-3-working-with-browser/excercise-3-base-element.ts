import { Locator, Page } from "@playwright/test";

export abstract class ExcerciseThreeBaseElement {
  constructor(public selector: string, protected page: Page) {}

  element(): Locator {
    return this.page.locator(this.selector);
  }

  public async toBeVisible() {
  }

  public async toBeHidden() {
  }

  public async toHaveText(text: string) {
  }

  public async toBeEnabled() {
  }

  public async toBeDisabled() {
  }

  async click() {
  }
}
