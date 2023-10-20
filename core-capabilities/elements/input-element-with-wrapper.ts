import { BaseElement } from "./base-element";
import { InputElement } from "./input-element";
import { InputValidationMessage } from "./input-validation-message";
import { TextElement } from "./text-element";

export class InputWitWrapper extends BaseElement {
  public input: InputElement;
  protected label: TextElement;
  protected error: InputValidationMessage;

  constructor(selector: string, label: string) {
    super(selector);
    this.input = new InputElement(`${selector} input`);
    this.label = new TextElement(`${selector} label`, label);
    this.error = new InputValidationMessage(`${selector} error-message`);
  }

  async validateElement(error: string | undefined) {
    await this.input.validateElement();
    await this.label.validateText();
    await this.error.errorShouldBe(error);
  }
}

export function getInputElement(selector: string): InputElement {
  return new InputElement(selector);
}
