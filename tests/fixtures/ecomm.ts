import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/auth';



type EcommFixtures = {

    loginPage: LoginPage;
};

export const test = base.extend<EcommFixtures>({

  loginPage: async ({ page }, use) => {
     await use(new LoginPage( page ));

  },
});

export { expect } from '@playwright/test';

