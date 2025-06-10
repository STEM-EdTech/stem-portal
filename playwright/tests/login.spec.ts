import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/en/login');
    });

    test('should display login form', async ({ page }) => {
        // Check if the login form elements are present
        await expect(page.getByTestId('login-email-input')).toBeVisible();
        await expect(page.getByTestId('login-password-input')).toBeVisible();
        await expect(page.getByTestId('login-submit-button')).toBeVisible();
        await expect(page.getByTestId('login-register-link')).toBeVisible();
    });
}); 