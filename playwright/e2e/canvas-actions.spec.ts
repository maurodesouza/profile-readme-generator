import path from 'path';

import { test, expect } from '../fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await page.reload();
});

test('right-clicking a section and deleting removes it', async ({ page }) => {
  await page.getByTestId('Text').click();
  await page.getByTestId('Text').click();
  await expect(page.getByTestId('canvas-section')).toHaveCount(2);

  await page.getByTestId('canvas-section').first().click({ button: 'right' });
  await page.getByText('Delete').click();

  await expect(page.getByTestId('canvas-section')).toHaveCount(1);
});

test('duplicating a section creates two identical sections', async ({
  page,
}) => {
  await page.getByTestId('Text').click();
  await expect(page.getByTestId('canvas-section')).toHaveCount(1);

  const firstId = await page
    .getByTestId('canvas-section')
    .first()
    .getAttribute('data-sectionid');

  await page.getByTestId('canvas-section').first().click({ button: 'right' });
  await page.getByText('Duplicate').click();

  await expect(page.getByTestId('canvas-section')).toHaveCount(2);
  const ids = await page
    .getByTestId('canvas-section')
    .evaluateAll(sections =>
      sections.map(section => section.getAttribute('data-sectionid'))
    );
  expect(ids).toContain(firstId);
});

test('reordering via context menu moves a section up', async ({ page }) => {
  await page.getByTestId('Text').click();
  await page.getByTestId('Text').click();

  const first = await page
    .getByTestId('canvas-section')
    .first()
    .getAttribute('data-sectionid');
  const second = await page
    .getByTestId('canvas-section')
    .last()
    .getAttribute('data-sectionid');

  await page.getByTestId('canvas-section').last().click({ button: 'right' });
  await page.getByRole('menuitem', { name: 'Up', exact: true }).click();

  const newFirst = await page
    .getByTestId('canvas-section')
    .first()
    .getAttribute('data-sectionid');
  expect(newFirst).toBe(second);
  expect(await page.getByTestId('canvas-section').last().getAttribute('data-sectionid')).toBe(first);
});

test('clearing the canvas brings back the welcome screen', async ({
  page,
}) => {
  await page.getByTestId('Text').click();
  await expect(page.getByTestId('canvas-section')).toHaveCount(1);

  await page.getByTestId('canvas-action-clear-canvas').click();
  await expect(page.getByTestId('welcome')).toBeVisible();
  await expect(page.getByTestId('canvas-section')).toHaveCount(0);
});

test('importing a readme file adds canvas sections', async ({ page }) => {
  await page.getByTestId('canvas-action-import-readme').click();

  const fixture = path.resolve('playwright/fixtures/readme.md');
  await page.locator('#readme-file-import').setInputFiles(fixture);

  await expect(page.getByTestId('canvas-section')).toHaveCount(1);
});
