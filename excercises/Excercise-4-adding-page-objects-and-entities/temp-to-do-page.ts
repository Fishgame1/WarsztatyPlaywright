import { InputElement } from "core-capabilities/elements/input-element";
import { Keys } from "core-capabilities/utils/keys";
import { ButtonElement } from "excercises/Excercise-3-working-with-browser/button-element-ex-3";
import { Page } from "playwright-core";
import { expect } from "playwright/test";
import { ToDoEntity } from "tests/Examples/temp-to-do-entity";
import { BasePage } from "./temp-base-page";

const baseSelector = ".todoapp";

export class ToDoPage extends BasePage {

  title: string
  public activeButton: ButtonElement

  constructor(
    protected page: Page,
    private url: string = "https://demo.playwright.dev/todomvc",
    tabName: string = "React • TodoMVC"
  ) {
    super(page, url, tabName, baseSelector);
    this.title = 'todos'
    this.activeButton = new ButtonElement('[class="filters"] li:nth-child(2)', page, 'Active')
  }

  async open(): Promise<void> {
    await this.page.goto(this.url);
    await this.shouldBeOpened();
  }

  async validatePage(): Promise<void> {
    await this.activeButton.validateElement()
    expect(await this.page.locator('h1').innerText()).toEqual(this.title)
  }

  async addToDo(entity: ToDoEntity): Promise<void> {
    await this.page.locator('[class="new-todo"]').fill(entity.taskName)
    await this.page.locator('[class="new-todo"]').press(Keys.ENTER)
  }
}
