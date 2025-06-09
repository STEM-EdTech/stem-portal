import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/login');
    });

    test('should display login form', async ({ page }) => {
        // Check if the login form elements are present
        await expect(page.getByTestId('login-email-input')).toBeVisible();
        await expect(page.getByTestId('login-password-input')).toBeVisible();
        await expect(page.getByTestId('login-submit-button')).toBeVisible();
        await expect(page.getByTestId('login-register-link')).toBeVisible();
    });

    test('should successfully log in with valid credentials', async ({ page }) => {
        // Fill in the login form
        await page.getByTestId('login-email-input').fill(process.env.PLAYWRIGHT_TEST_EMAIL ?? '');
        await page.getByTestId('login-password-input').fill(process.env.PLAYWRIGHT_TEST_PASSWORD ?? '');

        // Submit the form
        await page.getByTestId('login-submit-button').click();

        await expect(page.getByTestId('app-bar')).toBeVisible();
    });
}); 