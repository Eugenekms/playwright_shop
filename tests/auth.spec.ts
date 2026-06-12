import { test, expect } from '../fixtures/baseTest';


test ('check sign in', async ({ mainPage, loginPage}) => {
    
    await mainPage.open();
    await mainPage.signInButton.click();
    await loginPage.login('admin@practicesoftwaretesting.com', 'welcome01');    
    await expect(loginPage.userNameMenuButton).toBeVisible();
    await expect(loginPage.salesChartHeader).toBeVisible();

})