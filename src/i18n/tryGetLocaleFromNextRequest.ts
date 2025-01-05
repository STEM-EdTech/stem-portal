import type { NextRequest } from "next/server";
import { routing } from "~/i18n/routing";

export const tryGetLocaleFromNextRequest = (request: NextRequest) => {
    let locale: string | undefined = request.nextUrl.pathname.split("/")[1];

    if (!locale || !routing.locales.includes(locale as any)) {
        // try to get it from cookies
        locale = request.cookies.get("NEXT_LOCALE")?.value;
        if (!locale || !routing.locales.includes(locale as any)) {
            return routing.defaultLocale;
        }
    }

    return locale;
};