import { BaseElement } from "../../elements/base-element";
import { DynamicTextElement } from "../../elements/dynamic-text-element";

export class FooterElement extends BaseElement {
  readonly allFilter: DynamicTextElement;
  readonly activeFilter: DynamicTextElement;
  readonly completedFilter: DynamicTextElement;
  readonly itemsLeft: DynamicTextElement;

  constructor(selector: string = ".footer") {
    super(selector);
    this.allFilter = new DynamicTextElement("ul li:nth-child(1) a");
    this.activeFilter = new DynamicTextElement("ul li:nth-child(2) a");
    this.completedFilter = new DynamicTextElement("ul li:nth-child(3) a");
    this.itemsLeft = new DynamicTextElement(".todo-count");
  }

  async validateItemsLeft(numberOfTasks: number) {
    if (numberOfTasks === 1) {
      await this.itemsLeft.validateText(`${numberOfTasks} item left`);
    } else {
      await this.itemsLeft.validateText(`${numberOfTasks} items left`);
    }
  }

  async shouldBeHidden() {
    await this.toBeHidden();
    await this.allFilter.toBeHidden();
    await this.activeFilter.toBeHidden();
    await this.completedFilter.toBeHidden();
    await this.itemsLeft.toBeHidden();
  }

  async validateComponent(numberOfTasks: number) {
    await this.allFilter.toBeVisible();
    await this.activeFilter.toBeVisible();
    await this.completedFilter.toBeVisible();
    await this.validateItemsLeft(numberOfTasks);
  }

  async selectAll() {
    await this.allFilter.click();
  }

  async selecActive() {
    await this.activeFilter.click();
  }

  async selectCompleted() {
    await this.completedFilter.click();
  }
}
