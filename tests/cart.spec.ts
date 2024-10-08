import { test, expect } from './fixtures/ecomm';

test('Add item to cart', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');

  await page.locator('.productinfo:has-text("Sleeveless Dress")')
  .locator('text=Add to cart')
  .click();

});
