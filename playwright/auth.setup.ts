import { expect, Page, Cookie, test as setup } from '@playwright/test';
import { readFile, writeFile } from 'fs/promises';
import { AuthenticationFile } from './utils/authentication-file';

const SUPABASE_COOKIE_NAME_PREFIX = 'sb-';

const isCookieStillValid = async (filename: string, cookieNamePrefix: string): Promise<boolean> => {
    try {
        const sessionState = JSON.parse(await readFile(filename, { encoding: 'utf-8' })) as {
            cookies: Array<Cookie>;
        };

        if (sessionState.cookies.length > 0) {
            const targetCookie = sessionState.cookies.find((cookie) => cookie.name.startsWith(cookieNamePrefix));
            if (targetCookie && targetCookie.expires) {
                const expirationDate = new Date(targetCookie.expires * 1000);
                // If there's more than 48 hours left until the cookie expires, we can reuse it
                if ((expirationDate.getTime() - Date.now()) / 1000 / 3600 > 48) {
                    return true;
                }
            }
        }
    } catch (error) {
        // Ignore FileNotFound errors, as they are expected when the file does not exist
        if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
            console.error('Error while checking if previous authentication has expired: ', error);
        }
    }

    return false;
};

const overrideAccessCookieAttributes = async (filename: string) => {
    const cookiesFile = JSON.parse(await readFile(filename, { encoding: 'utf-8' })) as {
        cookies: Array<Cookie>;
    };
    if (cookiesFile.cookies.length > 0) {
        for (const cookie of cookiesFile.cookies) {
            if (cookie.name.startsWith(SUPABASE_COOKIE_NAME_PREFIX)) {
                cookie.secure = true;
                cookie.sameSite = 'None';
                break;
            }
        }
        await writeFile(filename, JSON.stringify(cookiesFile, null, 2), { encoding: 'utf-8' });
    }
};

type AuthenticateProps = {
    page: Page;
    filename: string;
    email: string;
    password: string;
};

const authenticate = async ({ page, filename, email, password }: AuthenticateProps) => {
    if (await isCookieStillValid(filename, SUPABASE_COOKIE_NAME_PREFIX)) {
        return;
    }

    await page.goto('/en/login');
    await page.waitForURL(/en\/login/);

    await page.fill('[name=email]', email);
    await page.fill('[name=password]', password);
    await page.getByTestId('login-submit-button').click();

    await expect(await page.getByTestId('app-bar')).toBeVisible();
    await expect(await page.getByTestId('app-bar-logout-button')).toBeVisible();

    await page.context().storageState({ path: filename });

    await overrideAccessCookieAttributes(filename);
};

setup.describe('Authentication setup', () => {
    setup('Log in as regular user', async ({ page }) => {
        await authenticate({
            page,
            filename: AuthenticationFile.RegularUser.storageState,
            email: process.env.PLAYWRIGHT_TEST_EMAIL ?? '',
            password: process.env.PLAYWRIGHT_TEST_PASSWORD ?? ''
        });
    });
});
