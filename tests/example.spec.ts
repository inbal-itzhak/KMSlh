//import { test, expect } from '@playwright/test';
import { test, expect } from '../fixtures/baseFixture.js';
import { NavBar } from '../pages/NavBar.js';
import {TestConfig} from '../config/testConfig.js'
/*
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test("KMS logo redirects to homepage", async ({page}) => {
    const navBar = new NavBar(page);
  await navBar.clickKMSLogo();
  await expect(page).toHaveURL(TestConfig.urls.home)
  });
  */
