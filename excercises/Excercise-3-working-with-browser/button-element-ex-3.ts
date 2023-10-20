import { expect, Page } from "@playwright/test";
import { BaseElement } from "./base-element-ex-3";

export class ButtonElement extends BaseElement {
  constructor(
    selector: string,
    page: Page
  ) {
    super(selector, page);
  }
}