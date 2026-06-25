import { faker } from '@faker-js/faker';
import { test, expect } from '../fixtures/baseTest';

test('check buy product', async ({ mainPage, checkoutPage, productPage }) => {
    const shippingAddress = {
        country: 'United States of America (the)',
        city: 'New York',
        state: 'NY',
        postalCode: '10001',
        street: '5th Avenue',
        houseNumber: '123',
    };

    await mainPage.open();
    await mainPage.choseInStock();
    await productPage.addToCartButton.click();
    await mainPage.cartLink.click();

    await checkoutPage.proceedToCheckoutButton1.click();

    await checkoutPage.proceedToCheckoutButton2.click();

    await checkoutPage.selectAnyCountry(shippingAddress.country);
    await checkoutPage.postalCode.fill(shippingAddress.postalCode);
    await checkoutPage.houseNumber.fill(shippingAddress.houseNumber);
    await checkoutPage.proceedToCheckoutButton3.click();

    await checkoutPage.selectPaymentMethod('Buy Now Pay Later');
    await checkoutPage.selectMonthlyInstallments('12 Monthly Installments');
    await checkoutPage.finishButton.click();

    await expect(checkoutPage.paymentSuccessMessage).toContainText('Payment was successful');
});

test('check contact form', async ({ mainPage, contactPage }) => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const emailAddress = faker.internet.email();
    const message = faker.lorem.paragraph(5);
    await mainPage.open();
    await mainPage.contactLink.click();
    await contactPage.contactFirstName.fill(firstName);
    await contactPage.contactLastName.fill(lastName);
    await contactPage.contactEmail.fill(emailAddress);
    await contactPage.contactSelectSubject('Webmaster');
    await contactPage.contactMessege.fill(message);
    await contactPage.contactSubmit.click();

    await expect(contactPage.contactSuccessAlert).toHaveText(
        'Thanks for your message! We will contact you shortly.',
    );
});
