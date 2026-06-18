import { test as setup, expect, request } from '@playwright/test';

const authFile = 'playwright/.auth/user.json'

setup('authenticate', async ({ page }) => {
    
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await page.getByTestId('email').fill(process.env.CUSTOMER_EMAIL!);
    await page.getByPlaceholder('password').fill(process.env.CUSTOMER_PASSWORD!);
    await page.getByRole('button', { name: 'Login'}).click();
    
    await expect(page.getByRole('heading', { name: 'My account'})).toBeVisible();    
    await page.context().storageState({ path: authFile });
});
