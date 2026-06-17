import { expect, test } from '@playwright/test';

test.describe('SauceDemo login flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle(/Swag Labs/);
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
  });

  test('Homepage Test', async ({ page }) => {
    await expect(page.locator('[data-test="inventory-list"]')).toBeVisible();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('3');
  });

  test('Logout Test', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await expect(page.locator('[data-test="logout-sidebar-link"]')).toBeVisible();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(page).toHaveURL(/saucedemo/);
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });
});
