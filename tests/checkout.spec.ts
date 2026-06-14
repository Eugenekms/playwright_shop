import { test, expect } from '../fixtures/baseTest';


test ('check buy product', async ({ mainPage, loginPage, checkoutPage, productPage}) => {
    const shippingAddress = {
        country: 'United States of America (the)',
        city: 'New York',
        state: 'NY',
        postalCode: '10001',
        street: '5th Avenue',
        houseNumber: '123'
    };
    await mainPage.open();
    await mainPage.choseInStock();
    await productPage.addToCardButton.click();
    await mainPage.cartLink.click();
    await checkoutPage.proceedToCheckoutButton1.click();
    await loginPage.login(process.env.CUSTOMER_EMAIL!, process.env.CUSTOMER_PASSWORD!);
    await loginPage.loginButton.click();
    await checkoutPage.proceedToCheckoutButton2.click();
    await checkoutPage.selectAnyCountry(shippingAddress.country);
    await checkoutPage.postalCode.fill(shippingAddress.postalCode);
    await checkoutPage.houseNumber.fill(shippingAddress.houseNumber);
    await checkoutPage.proceedToCheckoutButton3.click();
    await checkoutPage.selectPaymentMethod('Buy Now Pay Later')
    await checkoutPage.selectMonthlyInstallments('12 Monthly Installments');
    await checkoutPage.finishButton.click();

    await expect(checkoutPage.paymentSuccessMessage).toContainText('Payment was successful');

})