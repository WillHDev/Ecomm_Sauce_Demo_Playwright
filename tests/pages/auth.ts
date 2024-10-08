import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email =  page.getByPlaceholder('Email Password');
    this.password =  page.getByPlaceholder('Password');
    this.loginBtn =  page.locator('data-qa=login-button');
}

async login( email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
  }

  async load() {
    await this.page.goto('https://www.automationexercise.com/login');
  }
}