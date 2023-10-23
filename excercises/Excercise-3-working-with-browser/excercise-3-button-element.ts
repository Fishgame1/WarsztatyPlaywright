import { Page } from "@playwright/test";
import { ExcerciseThreeBaseElement } from "./excercise-3-base-element";

export class ExcerciseThreeButtonElement extends ExcerciseThreeBaseElement {
  
  constructor(
    selector: string,
    page: Page,
  ) {
    super(selector, page);
  }
}