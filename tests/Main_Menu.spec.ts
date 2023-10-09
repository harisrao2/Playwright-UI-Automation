import { test, expect } from '@playwright/test';

test('Main Menu Tests', async ({ page }) => {
  //Open Website 
  await page.goto('https://kdmaccessories.com/');
  //K5 Accessories Page
  await page.getByRole('button', { name: 'Kia K5' }).click();
  await page.getByRole('link', { name: 'K5 Accessories', exact: true }).click();
  await page.waitForSelector('#product-grid');
  const k5_acc_firstProduct = await page.$('#product-grid li:first-child');
  if (k5_acc_firstProduct) {
    await k5_acc_firstProduct.click();
  }else{
    throw new Error('No K5 Accessories products found');
  }
  //K5 Merchandise Page
  await page.getByRole('button', { name: 'Kia K5', exact: true }).click();
  await page.getByRole('link', { name: 'K5 Merchandise' }).click();
  await page.waitForSelector('#product-grid');
  const k5_merch_firstProduct = await page.$('#product-grid li:first-child');
  if (k5_merch_firstProduct) {
    await k5_merch_firstProduct.click();
  }else{
    throw new Error('No K5 Merchandise products found');
  }
  //EV6 Accessories Page
  await page.getByRole('button', { name: 'Kia EV6', exact: true }).click();
  await page.getByRole('link', { name: 'EV6 Accessories' }).click();
  await page.waitForSelector('#product-grid');
  const ev6_acc_firstProduct = await page.$('#product-grid li:first-child');
  if (ev6_acc_firstProduct) {
    await ev6_acc_firstProduct.click();
  }else{
    throw new Error('No EV6 Accessories products found');
  }

  //EV6 Merchandise Page
  await page.getByRole('button', { name: 'Kia EV6', exact: true }).click();
  await page.getByRole('link', { name: 'EV6 Merchandise' }).click();
  await page.waitForSelector('#product-grid');
  const ev6_merch_firstProduct = await page.$('#product-grid li:first-child');
  if (ev6_merch_firstProduct) {
    await ev6_merch_firstProduct.click();
  }else{
    throw new Error('No EV6 Merchandise products found');
  }

  //Forte Accessories Page
  await page.getByRole('button', { name: 'Kia Forte', exact: true }).click();
  await page.getByRole('link', { name: 'Forte Accessories' }).click();
  await page.waitForSelector('#product-grid');
  const forte_acc_firstProduct = await page.$('#product-grid li:first-child');
  if (forte_acc_firstProduct) {
    await forte_acc_firstProduct.click();
  }else{
    throw new Error('No Forte Accessories products found');
  }
  
  //Forte Merchandise Page
  await page.getByRole('button', { name: 'Kia Forte', exact: true }).click();
  await page.getByRole('link', { name: 'Forte Merchandise' }).click();
  await page.waitForSelector('#product-grid');
  const forte_merch_firstProduct = await page.$('#product-grid li:first-child');
  if (forte_merch_firstProduct) {
    await forte_merch_firstProduct.click();
  }else{
    throw new Error('No Forte Merchandise products found');
  }
  
  //Sportage Accessories Page
  await page.getByRole('button', { name: 'Kia Sportage', exact: true }).click();
  await page.getByRole('link', { name: 'Sportage Accessories' }).click();
  await page.waitForSelector('#product-grid');
  const sportage_acc_firstProduct = await page.$('#product-grid li:first-child');
  if (sportage_acc_firstProduct) {
    await sportage_acc_firstProduct.click();
  }else{
    throw new Error('No Sportage Accessories products found');
  }
  
  //Sportage Merchandise Page
  await page.getByRole('button', { name: 'Kia Sportage', exact: true }).click();
  await page.getByRole('link', { name: 'Sportage Merchandise' }).click();
  await page.waitForSelector('#product-grid');
  const sportage_merch_firstProduct = await page.$('#product-grid li:first-child');
  if (sportage_merch_firstProduct) {
    await sportage_merch_firstProduct.click();
  }else{
    throw new Error('No Sportage Merchandise products found');
  }

  //Telluride Accessories Page
  await page.getByRole('link', { name: 'Kia Telluride', exact: true }).click();
  await page.waitForSelector('#product-grid');
  const telluride_acc_firstProduct = await page.$('#product-grid li:first-child');
  if (telluride_acc_firstProduct) {
    await telluride_acc_firstProduct.click();
  }else{
    throw new Error('No Telluride Accesories products found');
  }
  
  //Sorento Accessories Page
  await page.getByRole('link', { name: 'Kia Sorento', exact: true }).click();
  await page.waitForSelector('#product-grid');
  const sorento_acc_firstProduct = await page.$('#product-grid li:first-child');
  if (sorento_acc_firstProduct) {
    await sorento_acc_firstProduct.click();
  }else{
    throw new Error('No Sorento Accessories products found');
  }
  
  //Stinger Accessories Page
  await page.getByRole('button', { name: 'Kia Stinger', exact: true }).click();
  await page.getByRole('link', { name: 'Stinger Accessories', exact: true }).click();
  await page.waitForSelector('#product-grid');
  const stinger_acc_firstProduct = await page.$('#product-grid li:first-child');
  if (stinger_acc_firstProduct) {
    await stinger_acc_firstProduct.click();
  }else{
    throw new Error('No Stinger Accessories products found');
  }
  
  //Stinger Merchandise Page
  await page.getByRole('button', { name: 'Kia Stinger', exact: true }).click();
  await page.getByRole('link', { name: 'Stinger Merchandise', exact: true }).click();
  await page.waitForSelector('#product-grid');
  const stinger_merch_firstProduct = await page.$('#product-grid li:first-child');
  if (stinger_merch_firstProduct) {
    await stinger_merch_firstProduct.click();
  }else{
    throw new Error('No Stinger Merchandise products found');
  }
  
  //Carnival Accessories Page
  await page.getByRole('link', { name: 'Kia Carnival', exact: true }).click();
  await page.waitForSelector('#product-grid');
  const carnival_acc_firstProduct = await page.$('#product-grid li:first-child');
  if (carnival_acc_firstProduct) {
    await carnival_acc_firstProduct.click();
  }else{
    throw new Error('No Carnival Accessories products found');
  }
  
  //Seltos Accessories Page
  await page.getByRole('link', { name: 'Kia Seltos', exact: true }).click();
  await page.waitForSelector('#product-grid');
  const seltos_acc_firstProduct = await page.$('#product-grid li:first-child');
  if (seltos_acc_firstProduct) {
    await seltos_acc_firstProduct.click();
  }else{
    throw new Error('No Seltos Accessories products found');
  }
  
  //Elantra Accessories Page
  await page.getByRole('link', { name: 'Hyundai Elantra', exact: true }).click();
  await page.waitForSelector('#product-grid');
  const elantra_acc_firstProduct = await page.$('#product-grid li:first-child');
  if (elantra_acc_firstProduct) {
    await elantra_acc_firstProduct.click();
  }else{
    throw new Error('No Elantra Accessories products found');
  }
  
  //Sonata Accessories Page
  await page.getByRole('link', { name: 'Hyundai Sonata', exact: true }).click();
  await page.waitForSelector('#product-grid');
  const sonata_acc_firstProduct = await page.$('#product-grid li:first-child');
  if (sonata_acc_firstProduct) {
    await sonata_acc_firstProduct.click();
  }else{
    throw new Error('No Sonata Accessories products found');
  }
  
  //Veloster Merchandise Page
  await page.getByRole('link', { name: 'Hyundai Veloster', exact: true }).click();
  await page.waitForSelector('#product-grid');
  const veloster_merch_firstProduct = await page.$('#product-grid li:first-child');
  if (veloster_merch_firstProduct) {
    await veloster_merch_firstProduct.click();
  }else{
    throw new Error('No Veloster Merchandise products found');
  }
  
  //G70 merchandise Page
  await page.getByRole('link', { name: 'Genesis G70', exact: true }).click();
  await page.waitForSelector('#product-grid');
  const g70_merch_firstProduct = await page.$('#product-grid li:first-child');
  if (g70_merch_firstProduct) {
    await g70_merch_firstProduct.click();
  }else{
    throw new Error('No G70 Merchandise products found');
  }
  
  //Decal&Stickers Page
  await page.getByRole('link', { name: 'Decals & Stickers', exact: true }).click();
  await page.waitForSelector('#product-grid');
  const decals_firstProduct = await page.$('#product-grid li:first-child');
  if (decals_firstProduct) {
    await decals_firstProduct.click();
  }else{
    throw new Error('No Decals & Stickers products found');
  }
  
  //Keychains Page
  await page.getByRole('link', { name: 'Keychains', exact: true }).click();
  await page.waitForSelector('#product-grid');
  const keychains_firstProduct = await page.$('#product-grid li:first-child');
  if (keychains_firstProduct) {
    await keychains_firstProduct.click();
  }else{
    throw new Error('No Keychains products found');
  }
  
  //All Merchandise Page
  await page.getByRole('link', { name: 'Merchandise', exact: true }).click();
  await page.waitForSelector('#product-grid');
  const all_merch_firstProduct = await page.$('#product-grid li:first-child');
  if (all_merch_firstProduct) {
    await all_merch_firstProduct.click();
  }else{
    throw new Error('No All Merchandise products found');
  }
});