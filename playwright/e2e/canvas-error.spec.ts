import { test, expect } from '../fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem(
      '@prg-ms:canvas store',
      JSON.stringify({
        sections: [{ type: 'text', content: { text: '' } }],
      })
    );
  });
  await page.reload();
});

test('invalid local storage payload shows canvas error and can be cleared', async ({
  page,
}) => {
  await expect(page.getByTestId('canvas-error')).toBeVisible();

  await page.getByTestId('canvas-error-clear-storage').click();
  await page.waitForLoadState('networkidle');

  await expect(page.getByTestId('welcome')).toBeVisible();
});
