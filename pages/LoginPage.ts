import { Locator, Page } from '@playwright/test';

export class LoginPage {
    
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly button: Locator;
    readonly myAccountHeader: Locator;
    readonly userNameMenuButton: Locator;
    readonly salesChartHeader: Locator;    
    
    constructor(page: Page) {
        this.page = page;
        this.email = page.getByPlaceholder('Your email');
        this.password = page.getByPlaceholder('password');
        this.button = page.getByRole('button', { name: 'Login'});
        this.myAccountHeader = page.getByRole('heading', { name: 'My account'});
        this.userNameMenuButton = page.getByTestId('nav-menu');
        this.salesChartHeader = page.getByRole('heading', { name: 'Sales over the years'});
        }
    
    async login(email: string, password: string) {
        await this.email.fill(email);
        await this.password.fill(password)  
        await this.button.click();              
    }
}