import { test, expect, Page } from '@playwright/test';
import { LoginActions } from '../src/utils/login-action';

test('once logged click the burger menu', async ({ page }) => {
    const login = new LoginActions(page);
    await login.performLogin();
    
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await expect(page.locator('div')).toContainText(['All Items', 'About', 'Logout', 'Reset App State']);
  });
  