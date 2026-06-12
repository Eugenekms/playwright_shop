import { Locator, Page } from '@playwright/test';

export class MainPage {
    
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchCountResult: Locator;
    readonly signInButton: Locator;
    readonly handToolHammer: Locator;
    readonly cardProductName: Locator;

    constructor(page: Page) {
        this.page = page;        
        this.searchInput = page.getByPlaceholder('Search');
        this.searchCountResult = page.getByTestId('search-result-count');
        this.signInButton = page.getByRole('link', { name: 'Sign in'})
        this.handToolHammer = page.getByRole('checkbox', { name: 'Hammer'});
        this.cardProductName = page.getByTestId('product-name');
    }
    
    async searchForProduct(productName: string) {
        await this.searchInput.fill(productName);
        await this.page.keyboard.press('Enter'); 
    }

    async open() {
        await this.page.goto('/')
    }
    
    
}