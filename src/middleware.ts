import createIntlMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { updateSession as authMiddleware } from '~/lib/supabase/authMiddleware';
import { routing } from "~/i18n/routing";

const { defaultLocale, localePrefix, locales } = routing;

const publicPages = [
    "/unauthorized",
    "/error"
];

const authPages = ["/login", "/register", "/auth/confirm", "/forgot-password", "/reset-password"];

const testPathnameRegex = (pages: string[], pathName: string): boolean => {
    const locale = locales.join("|");
    const regex = new RegExp(
        `^(/(${locale}))?(${pages.flatMap((p) => (p === "/" ? ["", "\/"] : p.replaceAll("/", "\/"))).join("|")}).*`,
        "i"
    );
    return regex.test(pathName);
};

const intlMiddleware = createIntlMiddleware({
    locales,
    defaultLocale,
    localePrefix
});

const middleware = (req: NextRequest) => {
    const isPublicPage = testPathnameRegex(publicPages, req.nextUrl.pathname);
    const isAuthPage = testPathnameRegex(authPages, req.nextUrl.pathname);

    const intlMiddlewareFn = intlMiddleware(req);

    if (isAuthPage) {
        return authMiddleware(req, intlMiddlewareFn);
    }

    if (isPublicPage) {
        return intlMiddlewareFn;
    } else {
        return authMiddleware(req, intlMiddlewareFn);
    }
};

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"]
};

export default middleware;