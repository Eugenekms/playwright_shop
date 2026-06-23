import { Locator, Page } from '@playwright/test';

/**
 * Page Object representing a single Product Page.
 */
export class ProductPage {
    readonly page: Page;
    readonly addToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.getByTestId('add-to-cart');
    }
}
