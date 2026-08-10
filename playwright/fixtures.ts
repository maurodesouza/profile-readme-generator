import { test as base, expect } from '@playwright/test';

import { HomePage } from './pages/home.page';
import { CanvasPage } from './pages/canvas.page';
import { PanelPage } from './pages/panel.page';

type Fixtures = {
  homePage: HomePage;
  canvasPage: CanvasPage;
  panelPage: PanelPage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  canvasPage: async ({ page }, use) => {
    await use(new CanvasPage(page));
  },
  panelPage: async ({ page }, use) => {
    await use(new PanelPage(page));
  },
});

export { expect };
