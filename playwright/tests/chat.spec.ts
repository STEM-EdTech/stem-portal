import { test, expect } from '@playwright/test';
import { AuthenticationFile } from "../utils/authentication-file";

test.describe('Chat Functionality', () => {
    test.use(AuthenticationFile.RegularUser);
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should display all chat components', async ({ page }) => {
        // Verify all main components are visible
        await expect(page.getByTestId('app-bar')).toBeVisible();
        await expect(page.getByTestId('sidebar')).toBeVisible();
        await expect(page.getByTestId('chat-box')).toBeVisible();
        await expect(page.getByTestId('chat-messages-wrapper')).toBeVisible();
    });

    test('should send and receive messages', async ({ page }) => {
        const testMessage = 'Hello, this is a test message';

        // Type message in chat box
        await page.getByTestId('chat-input').fill(testMessage);

        // Send message
        await page.getByTestId('send-message-button').click();

        // Verify message appears in chat area
        await expect(page.getByTestId('chat-messages-wrapper')).toContainText(testMessage);

        // Wait for and verify that a response message appears
        await expect(page.locator('[data-testid="chat-messages-container"] > div')).toHaveCount(2, { timeout: 10000 });
    });
}); 