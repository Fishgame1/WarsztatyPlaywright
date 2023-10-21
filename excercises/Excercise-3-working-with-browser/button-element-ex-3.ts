import { expect, Page } from "@playwright/test";
import { BaseElement } from "./base-element-ex-3";

export class ButtonElement extends BaseElement {
  
  constructor(
    selector: string,
    page: Page,
    public label: string
  ) {
    super(selector, page);
  }

  public async checkLabel() {
    expect(await this.element().innerText()).toEqual(this.label);
  }

  public async validateElement(shouldBeEnabled: boolean = true) {
    await this.checkLabel()
    if (shouldBeEnabled) {
      await this.toBeEnabled()
    }
  }
}