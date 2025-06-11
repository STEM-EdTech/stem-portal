import { defineConfig, devices } from '@playwright/test';
import { availableParallelism } from 'os';
import "dotenv/config";

export default defineConfig({
    testDir: './',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? availableParallelism() : "50%",
    reporter: process.env.CI ? 'html' : 'list',
    use: {
        baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'https://app.stem-ed.tech',
        trace: 'on-first-retry',
        video: process.env.CI ? 'on-first-retry' : 'off',
        ...devices['Desktop Chrome']
    },
    projects: [
        { name: 'setup', testMatch: /.*auth.setup\.ts/ },
        {
            name: 'e2e-tests',
            testMatch: /.*tests\/.*\.spec\.ts/,
            dependencies: ['setup']
        }
    ]
}); 