import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login';

test.describe('Login Flow', () => {
    //login test
  test('Login Test with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');

    await loginPage.clickGithubForkLink();
    await expect(page).toHaveURL('https://github.com/saucelabs/the-internet');
  });
});
