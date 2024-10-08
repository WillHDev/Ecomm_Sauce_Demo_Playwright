import { test as setup, expect } from './fixtures/ecomm';
import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config();
const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('Authenticate user', async ({ loginPage, page }) => {
  await loginPage.load();
  //await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.login( process.env.EMAIL, process.env.PASSWORD);
  await page.context().storageState({ path: authFile });
});
