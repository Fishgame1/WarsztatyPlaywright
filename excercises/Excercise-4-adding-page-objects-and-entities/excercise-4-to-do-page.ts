import { ExcerciseFourToDoEntity } from "excercises/Excercise-4-adding-page-objects-and-entities/excercise-4-to-do-entity";
import { Page } from "playwright-core";
import { ExcerciseFourBasePage } from "./excercise-4-base-page";

const baseSelector = ".todoapp";

export class ExcerciseFourToDoPage extends ExcerciseFourBasePage {

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
  }

  async addToDo(entity: ExcerciseFourToDoEntity): Promise<void> {
  }
}
