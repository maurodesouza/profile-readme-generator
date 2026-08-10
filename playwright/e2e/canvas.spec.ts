import { test, expect } from '../fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await page.reload();
});

test('editing a text section updates the preview', async ({ page }) => {
  await page.getByTestId('Text').click();
  const section = page.getByTestId('canvas-section');
  await expect(section).toHaveCount(1);

  await section.click();
  await expect(page.getByTestId('panel-content-right')).toBeVisible();
  await expect(page.getByTestId('content.text')).toBeVisible();

  const newText = 'Hello E2E';
  await page.getByTestId('content.text').fill(newText);
  await expect(section).toContainText(newText);
});

test('stats guard disappears after setting the github username', async ({
  page,
}) => {
  await page.getByTestId('Stats').click();
  await expect(page.getByTestId('guard-form')).toBeVisible();

  await page.getByTestId('canvas-action-open-settings').click();
  await expect(page.getByTestId('user.github')).toBeVisible();
  await page.getByTestId('user.github').fill('maurodesouza');

  await expect(page.getByTestId('guard-form')).not.toBeVisible();
  await expect(page.locator('img[src*="maurodesouza"]').first()).toBeVisible();
});
