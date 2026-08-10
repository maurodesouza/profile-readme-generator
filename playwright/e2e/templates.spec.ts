import { test, expect } from '../fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await page.reload();
});

test('previewing and applying a template', async ({ page }) => {
  const firstTemplate = page.getByTestId('welcome').getByRole('button').first();
  await firstTemplate.click();

  await expect(page.getByTestId('canvas-action-use-template')).toBeVisible();
  await expect(page.getByTestId('canvas-action-leave-preview')).toBeVisible();

  await page.getByTestId('canvas-action-leave-preview').click();
  await expect(page.getByTestId('welcome')).toBeVisible();
  await expect(page.getByTestId('canvas-action-use-template')).not.toBeVisible();

  await firstTemplate.click();
  await page.getByTestId('canvas-action-use-template').click();
  await expect(page.getByTestId('welcome')).not.toBeVisible();

  const sectionCount = await page.getByTestId('canvas-section').count();
  expect(sectionCount).toBeGreaterThan(0);
});
