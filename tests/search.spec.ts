import { test, expect } from '../fixtures/baseTest';

test('check search tools for main page', async ({ mainPage }) => {
    await mainPage.open();
    await mainPage.searchForProduct('drill');
    await expect(mainPage.searchCountResult).toHaveText(/.*drill*/);
});

test('single checkbox filter', async ({ mainPage }) => {
    await mainPage.open();

    await mainPage.handToolHammer.check();

    await expect(mainPage.cardProductName.first()).toContainText('Hammer', { ignoreCase: true });

    const allCards = await mainPage.cardProductName.all();

    for (const card of allCards) {
        await expect(card).toContainText('Hammer', { ignoreCase: true });
    }
});

test('mocking API response for product list', async ({ page, mainPage }) => {
    await page.route('**/products*', async (route) => {
        const fakeResponse = {
            current_page: 1,
            data: [
                {
                    id: 'fake-id-123',
                    name: 'Titanium QA Hammer',
                    description: 'Молот для разбивания багов',
                    price: 9999.99,
                    is_location_offer: false,
                    is_rental: false,
                    in_stock: true,
                    product_image: {
                        id: '01KVTPSX24QW6AQQW178CY4C64',
                        file_name: 'pliers01.avif',
                        title: 'Titanium Hammer',
                    },
                },
            ],
            total: 1,
        };

        await route.fulfill({ json: fakeResponse });
    });

    await mainPage.open();

    await expect(mainPage.cardProductName.first()).toContainText('Titanium QA Hammer');

    console.log('Test finished, mocked product displayed!');
});
