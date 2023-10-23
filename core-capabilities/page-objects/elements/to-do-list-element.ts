import { expect } from "@playwright/test";
import { BaseElement } from "../../elements/base-element";
import { CheckboxElement, getCheckboxElement } from "../../elements/checkbox-element";
import { DynamicTextElement, getDynamicTextElement } from "../../elements/dynamic-text-element";
import { InputElement, getInputElement } from "../../elements/input-element";
import { ToDoEntity } from "../../entities/to-do-entity";
import { Keys } from "../../utils/keys";

let baseSelector = ".todo-list li";

export class ToDoListElement extends BaseElement {
  readonly checkboxElement: CheckboxElement;
  readonly label: DynamicTextElement;
  readonly input: InputElement;

  constructor(index: number) {
    super(`${baseSelector}:nth-child(${index})`);
    this.checkboxElement = getCheckboxElement(`${this.selector} .toggle`);
    this.label = getDynamicTextElement(`${this.selector} label`);
    this.input = getInputElement(`${this.selector} input.edit`);
  }

  async markAsComplete() {
    await this.checkboxElement.check();
  }

  async validateElement(entity: ToDoEntity) {
    await this.label.validateText(entity.taskName);
    if (entity.isCompleted) {
      await expect(this.element()).toHaveClass("completed");
    } else {
      await expect(this.element()).toHaveClass("");
    }
  }

  async changeLabel(entity: ToDoEntity, odlEntity?: ToDoEntity) {
    await this.label.doubleClick();
    if (odlEntity) {
      await this.input.checkValue(odlEntity.taskName);
    }
    await this.input.fill(entity.taskName);
    await this.input.press(Keys.ENTER);
  }
}
