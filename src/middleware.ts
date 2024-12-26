import createIntlMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "~/auth";
import { routing } from "~/i18n/routing";

const { defaultLocale, localePrefix, locales } = routing;

const publicPages = [
    "/unauthorized"
];

const authPages = ["/login", "/register", "/forgot-password", "/reset-password"];

const testPathnameRegex = (pages: string[], pathName: string): boolean => {
    return RegExp(
        `^(/(${locales.join("|")}))?(${pages.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`,
        "i"
    ).test(pathName);
};

const intlMiddleware = createIntlMiddleware({
    locales,
    defaultLocale,
    localePrefix
});

const authMiddleware = auth((req) => {
    const isAuthPage = testPathnameRegex(authPages, req.nextUrl.pathname);
    const session = req.auth;

    // Redirect to login page if not authenticated
    if (!session && !isAuthPage) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    // Redirect to home page if authenticated and trying to access auth pages
    if (session && isAuthPage) {
        return NextResponse.redirect(new URL("/", req.nextUrl));
    }

    return intlMiddleware(req);
});

const middleware = (req: NextRequest) => {
    const isPublicPage = testPathnameRegex(publicPages, req.nextUrl.pathname);
    const isAuthPage = testPathnameRegex(authPages, req.nextUrl.pathname);

    if (isAuthPage) {
        return (authMiddleware as any)(req);
    }

    if (isPublicPage) {
        return intlMiddleware(req);
    } else {
        return (authMiddleware as any)(req);
    }
};

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"]
};

export default middleware;