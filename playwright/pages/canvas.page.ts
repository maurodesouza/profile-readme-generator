import type { Page, Locator } from '@playwright/test';

export class CanvasPage {
  readonly page: Page;
  readonly sections: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sections = page.getByTestId('canvas-section');
  }

  async goto() {
    await this.page.goto('/');
  }

  getSectionById(id: string) {
    return this.page.locator(
      `[data-testid="canvas-section"][data-sectionid="${id}"]`
    );
  }

  getSectionByIndex(index: number) {
    return this.sections.nth(index);
  }

  async addSection(name: string) {
    await this.page.getByTestId(name).click();
  }

  async selectSection(index: number) {
    await this.sections.nth(index).click();
  }
}
