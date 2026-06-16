import { test, expect, request } from '@playwright/test';

test ('request main page', async ({ request }) => {

    const response = await request.get('https://api.practicesoftwaretesting.com/products');
    expect(response.status()).toBe(200);

    const body = await response.json();    
    expect(body.data.length).toBeGreaterThan(0);
    expect(body.data[0].id).toBeTruthy();
    
});

test ('login via api', async ({request}) => {

    const response = await request.post('https://api.practicesoftwaretesting.com/users/login', {
        data: {
            email: process.env.CUSTOMER_EMAIL!,
            password: process.env.CUSTOMER_PASSWORD!
        }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.access_token).toBeDefined();
})
