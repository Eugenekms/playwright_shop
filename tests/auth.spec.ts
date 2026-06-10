import { test, expect } from '@playwright/test'
import { MainPage } from '../pages/MainPage'
import { LoginPage } from '../pages/LoginPage';

test ('check sign in', async ({page}) => {
    
    const mainPage = new MainPage(page);
    const loginPage = new LoginPage(page);
    await page.goto('https://practicesoftwaretesting.com');
    await mainPage.signInButton.click();
    await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');    
    await expect(loginPage.myAccountHeader).toBeVisible();

})