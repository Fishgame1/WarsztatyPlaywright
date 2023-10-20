import { InputElement } from "core-capabilities/elements/input-element";
import { Page } from "playwright-core";
import { expect } from "playwright/test";
import { BasePage } from "./temp-base-page";

const baseSelector = ".todoapp";

export class ToDoPage extends BasePage {

  title: string

  constructor(
    protected page: Page,
    private url: string = "https://demo.playwright.dev/todomvc",
    tabName: string = "React • TodoMVC"
  ) {
    super(page, url, tabName, baseSelector);
    this.title = 'todos'
  }

  async open(): Promise<void> {
    await this.page.goto(this.url);
    await this.shouldBeOpened();
  }

  async validatePage(): Promise<void> {
    expect(await this.page.locator('h1').innerText()).toEqual(this.title)
  }
}
