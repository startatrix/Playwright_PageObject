import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';

test('Login Test', async ({ page }) => {

     const login = new LoginPage(page);
     await page.goto('https://the-internet.herokuapp.com/login');

     await login.clickOnLogin('tomsmith','SuperSecretPassword!');

});