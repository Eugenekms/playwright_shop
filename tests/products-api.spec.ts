import { test, expect } from '@playwright/test';

test ('request main page', async ({ request }) => {

    const response = await request.get('https://api.practicesoftwaretesting.com/products');
    expect(response.status()).toBe(200);

    const body = await response.json();    
    expect(body.data.length).toBeGreaterThan(0);
    expect(body.data[0].id).toBeTruthy();
    
})
