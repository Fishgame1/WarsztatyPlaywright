import { BaseElement } from "./base-element";
import { DynamicTextElement } from "./dynamic-text-element";

export class InputValidationMessage extends BaseElement {
  protected error: DynamicTextElement;

  constructor(public readonly selector: string) {
    super(selector);
    this.error = new DynamicTextElement(selector);
  }

  async errorShouldBe(error: string | undefined) {
    if (!error) {
      await this.error.toBeHidden();
    } else {
      await this.error.toHaveText(error);
    }
  }
}
