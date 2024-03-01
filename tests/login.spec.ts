import { test, expect } from '@playwright/test';
import { LoginActions } from '../src/utils/login-action';

test('login', async ({ page }) => {
  const login = new LoginActions(page);
  await login.performLogin();

  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
});