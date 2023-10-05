import { APIRequest, Browser, BrowserContext, Page } from "playwright-core";

export interface Initialization {
  playwrightBrowser?: Browser;
  browserContext?: BrowserContext;
  page?: Page;
  browserName?: string;
  apiRequest?: APIRequest;
}

export class PlaywrightObject {
  browser?: Browser;
  context?: BrowserContext;
  browserName?: string;
  apiRequest?: APIRequest;
  private playwrightPage?: Page;

  async initNew(init: Initialization) {
    if (!init.playwrightBrowser) {
      throw new Error("Please provide page inside init parameter");
    }
    this.browser = init.playwrightBrowser;
    this.browserName = init.browserName;
    this.context = await this.browser.newContext();
    this.playwrightPage = await this.context.newPage();
    this.apiRequest = init.apiRequest;
  }

  async close() {
    await this.browser?.close();
    this.browser = undefined;
  }

  async initPageIfClosed(init: Initialization) {
    if (!init.playwrightBrowser) {
      throw new Error("Please provide page inside init parameter");
    }
    if (this.browser) return;
    this.browser = init.playwrightBrowser;
    this.browserName = init.browserName;
    this.context = await this.browser.newContext();
    this.playwrightPage = await this.context.newPage();
    this.apiRequest = init.apiRequest;
  }

  async open(url: string) {
    if (!this.page) {
      throw new Error("Cannot open page when it is not existing in given context");
    }
    await this.page().goto(url);
  }

  async openNewTab() {
    this.playwrightPage = await this.context?.newPage();
  }

  async switchTab(index: number) {
    this.playwrightPage = this.context?.pages()[index];
  }

  async closeTab(index: number) {
    await this.context?.pages()[index].close()
  }

  async openNewPage() {
    this.context = await this.browser?.newContext();
    await this.context?.newPage()
  }

  async switchPage(index: number) {
    this.context = this.browser?.contexts()[index];
  }

  async closePage(index: number) {
    await this.browser?.contexts()[index].close();
  }

  page() {
    if (!this.playwrightPage) {
      throw new Error("Page is not initialized yet");
    }
    return this.playwrightPage;
  }
}

export default new PlaywrightObject();
