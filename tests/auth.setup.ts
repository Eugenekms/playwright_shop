import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json'

setup('authenticate safely', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    
    await page.getByTestId('email').fill(process.env.CUSTOMER_EMAIL!);
    await page.getByPlaceholder('password').fill(process.env.CUSTOMER_PASSWORD!);
    
    await Promise.all([
        page.waitForURL('**/account'), 
        page.getByRole('button', { name: 'Login' }).click()
    ]);

    await page.context().storageState({ path: authFile });
});
