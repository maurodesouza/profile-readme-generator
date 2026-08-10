import type { Page, Locator } from '@playwright/test';

export class PanelPage {
  readonly page: Page;
  readonly leftPanel: Locator;
  readonly rightPanel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.leftPanel = page.getByTestId('panel-content-left');
    this.rightPanel = page.getByTestId('panel-content-right');
  }

  async openNewSection(name: string) {
    await this.page.getByTestId(name).click();
  }

  async openSettings() {
    await this.page.getByTestId('canvas-action-open-settings').click();
  }

  async openTemplates() {
    await this.page.getByTestId('Templates').click();
  }
}
