import { Locator, Page } from '@playwright/test';

export class MainPage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchCountResult: Locator;
    readonly signInButton: Locator;
    readonly handToolHammer: Locator;
    readonly cardProductName: Locator;
    readonly cardProductInstock: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByPlaceholder('Search');
        this.searchCountResult = page.getByTestId('search-result-count');
        this.signInButton = page.getByRole('link', { name: 'Sign in' });
        this.handToolHammer = page.getByRole('checkbox', { name: 'Hammer' });
        this.cardProductName = page.getByTestId('product-name');
        this.cardProductInstock = page.locator('.card');
        this.cartLink = page.getByTestId('nav-cart');
    }

    async searchForProduct(productName: string) {
        await this.searchInput.fill(productName);
        await this.page.keyboard.press('Enter');
    }

    async open() {
        await this.page.goto('/');
    }

    async choseInStock() {
        await this.cardProductInstock.first().waitFor({ state: 'visible' });
        const availbleCard = this.cardProductInstock.filter({ hasNotText: 'Out of stock' }).first();
        await availbleCard.getByTestId('product-name').click();
    }
}
