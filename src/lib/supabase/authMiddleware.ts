import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { env } from "~/env";
import { routing } from "~/i18n/routing";
import { tryGetLocaleFromNextRequest } from "~/i18n/tryGetLocaleFromNextRequest";

export async function updateSession(request: NextRequest, response: NextResponse) {
    const locale = tryGetLocaleFromNextRequest(request);

    const supabase = createServerClient(
        env.NEXT_PUBLIC_SUPABASE_URL,
        env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        console.info('Setting cookie', name);
                        request.cookies.set(name, value);
                        response.cookies.set(name, value, options);
                    });
                }
            }
        }
    );

    // Do not run code between createServerClient and
    // supabase.auth.getUser(). A simple mistake could make it very hard to debug
    // issues with users being randomly logged out.

    // IMPORTANT: DO NOT REMOVE auth.getUser()

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const localePattern = routing.locales.join('|');
    const regex = new RegExp(`^(\/${localePattern})?(\/login|\/auth\/confirm|\/register|\/forgot-password|\/reset-password).*`, 'i');
    if (
        !user &&
        !regex.test(request.nextUrl.pathname)
    ) {
        // no user, potentially respond by redirecting the user to the login page
        const url = request.nextUrl.clone();
        url.pathname = `/${locale}/login`;
        return NextResponse.redirect(url);
    }

    // IMPORTANT: You *must* return the supabaseResponse object as it is.
    // If you're creating a new response object with NextResponse.next() make sure to:
    // 1. Pass the request in it, like so:
    //    const myNewResponse = NextResponse.next({ request })
    // 2. Copy over the cookies, like so:
    //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
    // 3. Change the myNewResponse object to fit your needs, but avoid changing
    //    the cookies!
    // 4. Finally:
    //    return myNewResponse
    // If this is not done, you may be causing the browser and server to go out
    // of sync and terminate the user's session prematurely!

    return response;
}