import { test, expect } from '../fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await page.reload();
});

test('clicking Star This Project opens the project repository', async ({
  page,
  context,
}) => {
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByTestId('Star This Project').click(),
  ]);

  await expect(newPage).toHaveURL(
    'https://github.com/maurodesouza/profile-readme-generator'
  );
  await newPage.close();
});

test('clicking Fork on Github opens the fork page', async ({ page }) => {
  const fork = page.getByTestId('Fork on Github');
  await expect(fork).toHaveAttribute(
    'href',
    'https://github.com/maurodesouza/profile-readme-generator/fork'
  );
});

test.fixme('clicking Templates shows the templates panel', async ({ page }) => {
  await page.getByTestId('Templates').click();
  const card = page.getByTestId('template-card').first();
  await card.waitFor();
  await expect(card).toBeVisible();
});

test('clicking Level Up shows the recommended resources panel', async ({
  page,
}) => {
  await page.getByTestId('Level Up').click();
  await expect(page.getByTestId('panel-content-right')).toBeVisible();
});

test('clicking each feature button adds a canvas section', async ({ page }) => {
  const features = [
    'Text',
    'Techs',
    'Stats',
    'Social Media',
    'Music',
    'Image',
    'Border',
    'My activities',
    'Profile views',
    'Arcade games',
    'Snake',
  ];

  for (const name of features) {
    const before = await page.getByTestId('canvas-section').count();
    await page.getByTestId(name).click();
    await expect(page.getByTestId('canvas-section')).toHaveCount(before + 1);
  }
});
