import { test, expect } from '../fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await page.reload();
});

test('visiting home shows the welcome message', async ({ page }) => {
  await expect(page.getByTestId('welcome')).toBeVisible();
});

test('left and right panels are visible on desktop', async ({ page }) => {
  await expect(page.getByTestId('panel-content-left')).toBeVisible();
  await expect(page.getByTestId('panel-content-right')).toBeVisible();
});

test('adding a text section and reloading persists', async ({ page }) => {
  await page.getByTestId('Text').click();
  await expect(page.getByTestId('canvas-section')).toHaveCount(1);

  await page.reload();
  await expect(page.getByTestId('canvas-section')).toHaveCount(1);
});
