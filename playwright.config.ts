import { defineConfig, devices } from '@playwright/test';
import { availableParallelism } from 'os';
import "dotenv/config";

export default defineConfig({
    testDir: './playwright',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? availableParallelism() : "50%",
    reporter: process.env.CI ? 'html' : 'list',
    use: {
        baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'https://app.stem-ed.tech',
        trace: 'on-first-retry',
        video: process.env.CI ? 'on-first-retry' : 'off'
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        }
    ]
}); 