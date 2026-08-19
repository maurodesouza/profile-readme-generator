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

test('generate readme button is disabled when canvas is empty', async ({
  page,
}) => {
  const button = page.getByRole('button', { name: /Generate README/i });
  await expect(button).toBeVisible();
  await expect(button).toBeDisabled();

  await expect(
    page.getByRole('link', { name: /Generate README/i })
  ).toHaveCount(0);
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
