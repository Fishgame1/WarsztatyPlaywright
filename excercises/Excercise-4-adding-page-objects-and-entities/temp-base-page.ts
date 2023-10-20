import { expect, Frame, Page } from "@playwright/test";

export abstract class BasePage {
  protected constructor(
    protected page: Page,
    protected partialUrl?: string,
    protected tabName?: string,
    public pageSelector?: string,
  ) {}

  async openUrl(url: string) {
    await this.page.goto(url);
  }

  async shouldBeOpened() {
    await this.waitForLoadState("networkidle");
    await this.waitForLoadState("domcontentloaded");
    if (this.pageSelector) {
      await this.waitForPageSelector();
    }
    if (this.partialUrl) {
      await this.validateUrl();
    }
    if (this.tabName) {
      await this.validateTabName();
    }
  }

  async waitForUrl(url: string) {
    await this.page.waitForURL(url);
  }

  async waitForLoadState(state?: "load" | "domcontentloaded" | "networkidle", options?: { timeout?: number }) {
    await this.page.waitForLoadState(state);
  }

  async waitForPageSelector() {
    if (!this.pageSelector) {
      throw new Error("You need to specify page selector to be a");
    }
    await this.page.waitForSelector(this.pageSelector);
  }

  async validateUrl() {
    if (!this.partialUrl) {
      throw new Error("Can't checkUrl because uri is not specified");
    }
    await this.page.waitForURL(this.partialUrl + '/#/');
  }

  async validateTabName() {
    if (!this.tabName) {
      throw new Error("Can't checkTitle because title is not specified");
    }
    const actualTitle = await this.page.title();
    expect(actualTitle).toEqual(this.tabName);
  }
}
