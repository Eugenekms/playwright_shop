import { from } from "node:stream/iter";
import { test, expect } from '@playwright/test'
import { MainPage } from "../pages/MainPage";

test ('check search tools for main page', async({page}) => {

    const mainPage = new MainPage(page);
    await page.goto('https://practicesoftwaretesting.com');
    await mainPage.searchForProduct('drill');
    
    await expect(mainPage.searchCountResult).toHaveText(/.*drill.*/)
});