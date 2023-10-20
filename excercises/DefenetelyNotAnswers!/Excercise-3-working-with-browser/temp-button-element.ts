import { expect, Page } from "@playwright/test";
import { BaseElement } from "./temp-base-element";

export class ButtonElement extends BaseElement {
  constructor(
    public selector: string, protected page: Page, public label: string,
  ) {
    super(selector, page);
  }

  async validateElement(isDisabled: boolean, isVisible: boolean) {
    await this.validateLabel();
    isDisabled ? await this.toBeDisabled() : await this.toBeEnabled();
    isVisible ? await this.toBeHidden() : await this.toBeVisible();
  }

  private async validateLabel() {
    await this.toHaveText(this.label);
  }
}