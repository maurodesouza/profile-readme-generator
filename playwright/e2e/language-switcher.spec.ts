import { test, expect } from '../fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await page.reload();
});

test('switching language to Portuguese updates the URL and UI text', async ({
  page,
}) => {
  await expect(page.getByTestId('welcome')).toBeVisible();

  await page.getByTestId('canvas-action-change-language').click();

  await page.getByTestId('language-option-pt-BR').click();

  await expect(page).toHaveURL(/\/pt-BR/);

  await expect(page.getByTestId('welcome')).toContainText(
    /Bem-vindo ao Gerador de README de Perfil/
  );
});

test('switching back to English restores the URL and UI text', async ({
  page,
}) => {
  await page.getByTestId('canvas-action-change-language').click();
  await page.getByTestId('language-option-pt-BR').click();
  await expect(page).toHaveURL(/\/pt-BR/);

  await page.getByTestId('canvas-action-change-language').click();
  await page.getByTestId('language-option-en').click();

  await expect(page).toHaveURL(/\/en/);

  await expect(page.getByTestId('welcome')).toContainText(
    /Welcome To Profile Readme Generator/
  );
});
