import { test, expect } from '../fixtures';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: async () => undefined },
      configurable: true,
      writable: true,
    });
  });

  await page.goto('/');
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await page.reload();
});

test('generated files tree, copy button and workflow hover', async ({
  page,
}) => {
  await page.getByTestId('Text').click();
  await page.getByTestId('canvas-section').first().click();
  const text = 'Hello from E2E';
  await page.getByTestId('content.text').fill(text);

  await page.getByRole('link', { name: /Generate README/i }).click();
  await page.waitForURL('**/result');

  await expect(page.getByTestId('generated-files')).toBeVisible();
  await expect(page.getByTestId('tree-file').first()).toBeVisible();
  await expect(page.getByText(text)).toBeVisible();

  const copy = page.getByTestId('copy-button');
  await expect(copy).toHaveText(/Copy File Content/);
  await copy.click();
  await expect(copy).toHaveText(/Copied/);

  const workflow = page.getByTestId('workflow-paragraph');
  if (await workflow.isVisible().catch(() => false)) {
    await workflow.hover();
  }
});
