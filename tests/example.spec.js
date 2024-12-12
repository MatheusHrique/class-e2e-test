// @ts-check
const { test, expect } = require("@playwright/test");

// https://demo.playwright.dev/todomvc/#/
// test('has title', async ({ page }) => {
//   await page.goto('https://demo.playwright.dev/todomvc/#/');

// Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://demo.playwright.dev/todomvc/#/');

// Click the get started link.
// await page.getByRole('link', { name: 'Get started' }).click();

// Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test("tem título", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/#/");
  await expect(page).toHaveTitle("todos");
});

test("verificar se adiciona uma nova linha", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/#/");

  // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByPlaceholder("What needs to be done?").fill("Linha 1");
  await page.keyboard.press("Enter");
  await expect(page.locator(".todo-item")).toHaveText("Linha 1");

  // await expect(page.locator('ul > li')).toHaveText(['Text 1', 'Text 2', 'Text 3']);

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
