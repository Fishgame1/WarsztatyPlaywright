import { InputElement } from "core-capabilities/elements/input-element";
import { Keys } from "core-capabilities/utils/keys";
import { ButtonElement } from "excercises/Excercise-3-working-with-browser/button-element-ex-3";
import { BasePage } from "excercises/Excercise-4-adding-page-objects-and-entities/temp-base-page";
import { getConfig } from "global-setup";
import { expect, Page } from "playwright/test";
import { ToDoEntity } from "tests/Examples/temp-to-do-entity";

const baseSelector = ".todoapp";

const translation = () => getConfig().translations;

export class ToDoPage extends BasePage {

  title: string

  constructor(
    protected page: Page,
    private url: string = "https://demo.playwright.dev/todomvc",
    tabName: string = "React • TodoMVC"
  ) {
    super(page, url, tabName, baseSelector);
    this.title = translation().header
  }

  async open(): Promise<void> {
    await this.page.goto(this.url);
    await this.shouldBeOpened();
  }

  async validatePage(entity: ToDoEntity): Promise<void> {
    expect(await this.page.locator('h1').innerText()).toEqual(this.title)
    await this.validateToDo(entity, 1)
  }

  async addToDo(entity: ToDoEntity): Promise<void> {
    await this.page.locator('[class="new-todo"]').fill(entity.taskName)
    await this.page.locator('[class="new-todo"]').press(Keys.ENTER)
  }

  async validateToDo(entity: ToDoEntity, index: number) {
    let locator = `.todo-list li:nth-child(${index})`
    expect(await this.page.locator(`${locator} label`).innerText()).toEqual(entity.taskName)
    if (entity.isCompleted) {
      await expect(this.page.locator(locator)).toHaveClass("completed");
    } else {
      await expect(this.page.locator(locator)).toHaveClass("");
    }
  }
}