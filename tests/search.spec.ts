import { test, expect } from '../fixtures/baseTest';


test ('check search tools for main page', async({mainPage}) => {
    
    await mainPage.open();
    await mainPage.searchForProduct('drill');    
    await expect(mainPage.searchCountResult).toHaveText(/.*drill*/);
});

test ('single checkbox filter', async({page, mainPage}) => {
    
    await mainPage.open();
    await mainPage.handToolHammer.check();
    await page.waitForLoadState('networkidle')
    await expect(mainPage.cardProductName.first()).toBeVisible();    
    const allCards = await mainPage.cardProductName.all();

    for (const card of allCards) {
        await expect(card).toContainText('Hammer', { ignoreCase: true});        
    }
    
})