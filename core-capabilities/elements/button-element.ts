import { expect } from "@playwright/test";
import playwrightObject from "../engine/playwright-object";
import { BaseElement } from "./base-element";

export class ButtonElement extends BaseElement {
  constructor(
    selector: string,
    public label: string
  ) {
    super(selector);
  }

  public async clickAndWaitForResponse(partialUrl: string) {
    const response = playwrightObject
      .page()
      .waitForResponse((url) => url.url().includes(partialUrl), { timeout: 1000 });
    await this.element().waitFor({ state: "visible" });
    expect((await response).ok()).toBeTruthy();
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

export function getButtonElement(selector: string, label: string): ButtonElement {
  return new ButtonElement(selector, label);
}
