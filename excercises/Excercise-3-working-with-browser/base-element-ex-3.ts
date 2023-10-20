import { expect, Locator, Page } from "@playwright/test";

export abstract class BaseElement {
  constructor(public selector: string, protected page: Page) {}

  element(): Locator {
    return this.page.locator(this.selector);
  }

  public async toBeVisible() {
  }

  public async toBeHidden() {
  }

  public async toBeEnabled() {
  }

  public async toBeDisabled() {
  }

  async click() {
  }
}
