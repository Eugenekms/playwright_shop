import { Locator, Page } from '@playwright/test'

export class ProductPage {

    readonly page: Page;
    readonly addToCardButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCardButton = page.getByTestId('add-to-cart');
    }

}