import { expect, Locator, Page } from "@playwright/test";

export abstract class ExcerciseThreeBaseElement {
  constructor(public selector: string, protected page: Page) {}

  element(): Locator {
    return this.page.locator(this.selector);
  }

  public async toBeVisible() {
    await this.element().waitFor({ state: "visible" });
  }

  public async toBeHidden() {
    await this.element().waitFor({ state: "hidden" });
  }

  public async toHaveText(text: string) {
    await expect(this.element()).toHaveText(text);
  }

  public async toBeEnabled() {
    await expect(this.element()).toBeEnabled();
  }

  public async toBeDisabled() {
    await expect(this.element()).toBeDisabled();
  }

  async click() {
    return await this.element().click();
  }

  async doubleClick() {
    return await this.element().dblclick();
  }

  async press(key: string) {
    return await this.element().press(key);
  }
}
