import { test, expect } from '@playwright/test';

const wait = 500;

// This Test case will fail if the Economy Shipping & Expidited Shipping Options are not showing.
test('US Shipping Prices', async ({ page }) => {
  // Open KDM Accessories Page
  await page.goto('https://kdmaccessories.com/');
  // Open K5 Accessories Page
  await page.getByRole('button', { name: 'Kia K5' }).click();
  await page.getByRole('link', { name: 'K5 Accessories', exact: true }).click();
  // Add Overlays to cart
  await page.getByRole('link', { name: 'Kia K5 Overlays Front & Back (2022-2024) | Perfect Fit and Easy Installation' }).click();
  await page.getByText('Carbon Fiber').click();
  await page.getByText('Red', { exact: true }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  // Checkout to see Shipping Prices
  await page.getByRole('button', { name: 'Check out' }).click();
  await page.waitForTimeout(wait);
  await page.getByPlaceholder('Address').click();
  await page.waitForTimeout(wait);
  await page.getByPlaceholder('Address').fill('12408 Dessau Austin, TX, USA');
  await page.waitForTimeout(wait);
  await page.getByRole('option', { name: '12408 Dessau Road, Austin, TX, USA' }).click();
  await page.getByRole('button', { name: 'Close suggestions' }).click();
  await page.waitForTimeout(wait);
  const economyLabel = page.locator('label').filter({ hasText: 'Economy (Envelope / No Tracking)$1.25' })
  const expeditedLabel = page.locator('label').filter({ hasText: 'Expedited (3-4 Business Days w/ Tracking)$3.90' })
  try {
    await expect(economyLabel).toBeVisible();
  } catch (error) {
    throw new Error('Economy Shipping Match Fail\n' + error.message);
  } 
  try {
    await expect(expeditedLabel).toBeVisible();
  } catch (error) {
    throw new Error('Expidited Shipping Match Fail\n' + error.message);
  }
});





