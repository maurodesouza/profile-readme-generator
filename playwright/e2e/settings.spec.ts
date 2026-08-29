import { test, expect } from '../fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await page.reload();
});

test('opening user settings and persisting github username', async ({
  page,
}) => {
  await page.getByTestId('canvas-action-open-settings').click();
  await expect(page.getByTestId('panel-content-right')).toBeVisible();
  await expect(page.getByTestId('user.github')).toBeVisible();

  await page.getByTestId('user.github').fill('maurodesouza');

  await page.reload();
  await page.getByTestId('canvas-action-open-settings').click();
  await expect(page.getByTestId('user.github')).toHaveValue('maurodesouza');
});

test.fixme('toggling theme persists after reload', async ({ page }) => {
  const html = page.locator('html');
  const before = await html.getAttribute('data-theme');

  await page.getByTestId('canvas-action-toggle-theme').click();
  await page.waitForFunction(
    oldTheme => document.documentElement.getAttribute('data-theme') !== oldTheme,
    before
  );

  const after = await html.getAttribute('data-theme');
  expect(after).not.toEqual(before);

  await page.reload();
  const afterReload = await html.getAttribute('data-theme');
  expect(afterReload).toEqual(after);
});

test('stats image requests use the updated username', async ({ page }) => {
  await page.getByTestId('canvas-action-open-settings').click();
  await page.getByTestId('user.github').fill('maurodesouza');

  await page.getByTestId('Stats').click();
  await expect(page.getByTestId('guard-form')).not.toBeVisible();
  await expect(page.locator('img[src*="maurodesouza"]').first()).toBeVisible();
});
