import { Keys } from "core-capabilities/utils/keys";
import { ExcerciseThreeButtonElement } from "excercises-filled/Excercise-3-working-with-browser/excercise-3-button-element";
import { Page } from "playwright-core";
import { expect } from "playwright/test";
import { ExcerciseFourToDoEntity } from "excercises-filled/Excercise-4-adding-page-objects-and-entities/excercise-4-to-do-entity";
import { ExcerciseFourBasePage } from "./excercise-4-base-page";
import { getConfig } from "global-setup";

const baseSelector = ".todoapp";
let translation = () => getConfig().translations

export class ExcerciseFourToDoPage extends ExcerciseFourBasePage {

  title: string
  public activeButton: ExcerciseThreeButtonElement

  constructor(
    protected page: Page,
    private url: string = "https://demo.playwright.dev/todomvc",
    tabName: string = "React • TodoMVC"
  ) {
    super(page, url, tabName, baseSelector);
    this.title = translation().header
    this.activeButton = new ExcerciseThreeButtonElement('[class="filters"] li:nth-child(2)', page, translation().activeButtonLabel)
  }

  async open(): Promise<void> {
    await this.page.goto(this.url);
    await this.shouldBeOpened();
  }

  async validatePage(): Promise<void> {
    await this.activeButton.validateElement()
    expect(await this.page.locator('h1').innerText()).toEqual(this.title)
  }

  async addToDo(entity: ExcerciseFourToDoEntity): Promise<void> {
    await this.page.locator('[class="new-todo"]').fill(entity.taskName)
    await this.page.locator('[class="new-todo"]').press(Keys.ENTER)
  }
}
