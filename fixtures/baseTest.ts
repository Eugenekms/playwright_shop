import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { LoginPage } from '../pages/LoginPage';

type MyFixtures = {
    mainPage: MainPage;
    loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({

    mainPage: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await use(mainPage);
    },

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

});

export { expect } from '@playwright/test'