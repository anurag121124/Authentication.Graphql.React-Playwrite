const { test, expect } = require('@playwright/test');

test.describe('SignIn Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/signin');
  });

  test('should display the SignIn form', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    await expect(page.locator('text=Remember me')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
  });

  test('should display error message on failed login', async ({ page }) => {
    await page.fill('input[name="email"]', 'invalid@example.com');
    await page.fill('input[name="password"]', 'invalidpassword');
    await page.click('button:has-text("Sign In")');
    await expect(page.locator('text=Login failed. Please try again.')).toBeVisible();
  });

  test('should navigate to homepage on successful login', async ({ page }) => {
    await page.fill('input[name="email"]', 'valid@example.com');
    await page.fill('input[name="password"]', 'validpassword');
    await page.click('button:has-text("Sign In")');
    
    await page.waitForTimeout(3000);
    
    await page.waitForTimeout(3000); // wait for the redirect to happen
    await expect(page).toHaveURL('http://localhost:3000/homepage', { timeout: 3000 }); // increased timeout to 15s
  });
});
