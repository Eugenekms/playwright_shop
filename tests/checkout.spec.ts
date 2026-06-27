import { faker } from '@faker-js/faker';
import { test, expect } from '../fixtures/baseTest';

test('check contact form', async ({ mainPage, contactPage }) => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const emailAddress = faker.internet.email();
    const message = faker.lorem.words(15);
    await mainPage.open();
    await mainPage.contactLink.click();
    await contactPage.contactFirstName.fill(firstName);
    await contactPage.contactLastName.fill(lastName);
    await contactPage.contactEmail.fill(emailAddress);
    await contactPage.contactSelectSubject('Webmaster');
    await contactPage.contactMessage.fill(message);
    await contactPage.contactSubmit.click();

    await expect(contactPage.contactSuccessAlert).toHaveText(
        'Thanks for your message! We will contact you shortly.',
    );
});
