import { Locator, Page } from '@playwright/test';

/**
 * Page Object representing the Contact Page of the e-commerce application.
 */

export class ContactPage {
    readonly page: Page;
    readonly contactSubmit: Locator;
    readonly contactFirstName: Locator;
    readonly contactLastName: Locator;
    readonly contactEmail: Locator;
    readonly contactSubject: Locator;
    readonly contactMassege: Locator;
    readonly contactSuccessAlert: Locator;

    constructor(page: Page) {
        this.page = page;

        this.contactSubmit = page.getByTestId('contact-submit');
        this.contactFirstName = page.getByPlaceholder('Your first name *');
        this.contactLastName = page.getByPlaceholder('Your last name *');
        this.contactEmail = page.getByPlaceholder('Your email *');
        this.contactSubject = page.getByTestId('subject');
        this.contactMassege = page.getByTestId('message');
        this.contactSuccessAlert = page.getByRole('alert');
    }
    /**
     * Selects the Subject.
     * @param {string} Subject - The Subject to choose (e.g., 'Webmaster', 'Return', 'Payments', 'Status of my order').
     */
    async contactSelectSubject(Subject: string) {
        await this.contactSubject.selectOption(Subject);
    }
}
