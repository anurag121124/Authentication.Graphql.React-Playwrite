import { test, expect } from '@playwright/test';

test('user can sign up successfully', async ({ page }) => {
  // Go to the sign-up page
  await page.goto('http://localhost:3000/SignUp');

  // Fill in the username
  await page.fill('input[name="username"]', 'testuser');

  // Fill in the email
  await page.fill('input[name="email"]', 'testuser@example.com');

  // Fill in the password
  await page.fill('input[name="password"]', 'testpassword');

  // Check the checkbox for receiving emails (if necessary)
  await page.check('input[type="checkbox"]');

  // Click the sign-up button
  await page.click('button[type="submit"]');

  // Verify redirection to the sign-in page
  await page.waitForURL('http://localhost:3000/SignIn');
});

