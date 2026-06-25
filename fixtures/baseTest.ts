import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { LoginPage } from '../pages/LoginPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ProductPage } from '../pages/ProductPage';
import { ContactPage } from '../pages/ContactPage';

type MyFixtures = {
    mainPage: MainPage;
    loginPage: LoginPage;
    checkoutPage: CheckoutPage;
    productPage: ProductPage;
    contactPage: ContactPage;
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

    checkoutPage: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    },

    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    },

    contactPage: async ({ page }, use) => {
        const contactPage = new ContactPage(page);
        await use(contactPage);
    },
});

export { expect } from '@playwright/test';
