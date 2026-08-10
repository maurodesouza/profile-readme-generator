import type { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly welcome: Locator;
  readonly leftPanel: Locator;
  readonly rightPanel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcome = page.getByTestId('welcome');
    this.leftPanel = page.getByTestId('panel-content-left');
    this.rightPanel = page.getByTestId('panel-content-right');
  }

  async goto() {
    await this.page.goto('/');
    await this.welcome.waitFor();
  }

  async waitForWelcome() {
    await this.welcome.waitFor();
  }
}
