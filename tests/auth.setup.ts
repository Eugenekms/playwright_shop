import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json'

setup('authenticate safely', async ({ page }) => {
    // 1. Идем строго на главную страницу
    await page.goto('https://practicesoftwaretesting.com/');
    
    // 2. Честно кликаем кнопку входа в навигации
    await page.getByTestId('nav-sign-in').click();
    
    // 3. Теперь форма 100% на экране, вводим данные
    await page.getByTestId('email').fill(process.env.CUSTOMER_EMAIL!);
    await page.getByPlaceholder('password').fill(process.env.CUSTOMER_PASSWORD!);
    
    // 4. Жмем кнопку и ждем перехода в профиль
    await Promise.all([
        page.waitForURL('**/account'), 
        page.getByRole('button', { name: 'Login' }).click()
    ]);

    // 5. Сохраняем сессию
    await page.context().storageState({ path: authFile });
});
