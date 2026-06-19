import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json'

setup('authenticate safely', async ({ page }) => {
    // 1. Идем на страницу логина
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    
    // 2. Вводим данные
    await page.getByTestId('email').fill(process.env.CUSTOMER_EMAIL!);
    await page.getByPlaceholder('password').fill(process.env.CUSTOMER_PASSWORD!);
    
    // 3. Жмем кнопку и ОЧЕНЬ ВАЖНО: ждем завершения навигации
    await Promise.all([
        page.waitForURL('**/account'), // Ждем перехода в аккаунт
        page.getByRole('button', { name: 'Login' }).click()
    ]);

    // 4. Принудительно сохраняем всё, включая LocalStorage
    await page.context().storageState({ path: authFile });
});
