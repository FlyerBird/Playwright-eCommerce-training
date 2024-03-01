import { type Page } from '@playwright/test';

export class LoginActions {
  readonly page: Page;
  readonly user: string;
  readonly pass: string;

  constructor(page: Page) {
    this.page = page;
    this.user = process.env.USER_TRAINING || "";
    this.pass = process.env.PASS || "";
  }

  async goto():Promise<void> {
    await this.page.goto('https://playwright.dev');
  }

  // Define a reusable function to perform login
  async performLogin() {
  await this.page.goto('https://www.saucedemo.com/');
  await this.page.locator('[data-test="username"]').fill(this.user);
  await this.page.locator('[data-test="password"]').fill(this.pass);
  await this.page.locator('[data-test="login-button"]').click();
  
  }
}

