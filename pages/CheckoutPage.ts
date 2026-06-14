import { Locator, Page } from '@playwright/test'

export class CheckoutPage {

    readonly page: Page;
    readonly proceedToCheckoutButton1: Locator;
    readonly proceedToCheckoutButton2: Locator;
    readonly proceedToCheckoutButton3: Locator;
    readonly selectCountry: Locator;
    readonly postalCode: Locator;
    readonly houseNumber: Locator;
    readonly state: Locator;
    readonly paymentMethod: Locator;
    readonly monthlyInstallments: Locator;
    readonly finishButton: Locator;
    readonly paymentSuccessMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.proceedToCheckoutButton1 = page.getByTestId('proceed-1');
        this.proceedToCheckoutButton2 = page.getByTestId('proceed-2');
        this.proceedToCheckoutButton3 = page.getByTestId('proceed-3');
        this.selectCountry = page.getByTestId('country');
        this.postalCode = page.getByTestId('postal_code');
        this.houseNumber = page.getByTestId('house_number');
        this.state = page.getByTestId('state');
        this.paymentMethod = page.getByTestId('payment-method');
        this.monthlyInstallments = page.getByTestId('monthly_installments');
        this.finishButton = page.getByTestId('finish');
        this.paymentSuccessMessage = page.getByTestId('payment-success-message');
    };

    async selectAnyCountry(countryName: string) {
        await this.selectCountry.selectOption(countryName);
    };

    async selectPaymentMethod(paymentMethod: string) {
        await this.paymentMethod.selectOption(paymentMethod);
    };

    async selectMonthlyInstallments(monthlyInstallments: string) {
        await this.monthlyInstallments.selectOption(monthlyInstallments);
    };
}