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
  await expect(page).toHaveTitle("React • TodoMVC");
});

test("verificar se está adicionando a lista corretamente", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/#/");
  await page.getByPlaceholder("What needs to be done?").fill("Linha 1");
  await page.keyboard.press("Enter");
  await expect(page.getByTestId("todo-title")).toHaveText(["Linha 1"]);
});

test("verificar se adiciona 3 linhas", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/#/");
  await expect(page.getByRole("listitem")).toHaveCount(0);
  await page.getByPlaceholder("What needs to be done?").fill("Linha 1");
  await page.keyboard.press("Enter");
  await page.getByPlaceholder("What needs to be done?").fill("Linha 2");
  await page.keyboard.press("Enter");
  await page.getByPlaceholder("What needs to be done?").fill("Linha 3");
  await page.keyboard.press("Enter");
  await expect(page.getByRole("listitem")).toHaveCount(6);
});

test("verificar se está indicando que falta 3 itens", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/#/");
  await expect(page.getByRole("listitem")).toHaveCount(0);
  await page.getByPlaceholder("What needs to be done?").fill("Linha 1");
  await page.keyboard.press("Enter");
  await page.getByPlaceholder("What needs to be done?").fill("Linha 2");
  await page.keyboard.press("Enter");
  await page.getByPlaceholder("What needs to be done?").fill("Linha 3");
  await page.keyboard.press("Enter");
  await expect(page.getByTestId("todo-count")).toHaveText("3 items left");
});

test("verificar se o botão de exclusão é clicado", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/#/");
  await page.getByPlaceholder("What needs to be done?").fill("Linha 1");
  await page.keyboard.press("Enter");

  const todoItems = page.getByTestId("todo-item");
  await todoItems.nth(0).getByRole("checkbox").check();
  await page.getByRole("button", { name: "Clear completed" }).click();
  await expect(todoItems).toHaveCount(0);
});
