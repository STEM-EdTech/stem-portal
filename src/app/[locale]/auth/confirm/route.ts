import { type EmailOtpType } from '@supabase/supabase-js';
import { type NextRequest } from 'next/server';
import { redirect } from "~/i18n/routing";
import { tryGetLocaleFromNextRequest } from "~/i18n/tryGetLocaleFromNextRequest";
import { createClient } from '~/lib/supabase/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const token_hash = searchParams.get('token_hash');
    const type = searchParams.get('type') as EmailOtpType | null;

    const locale = tryGetLocaleFromNextRequest(request);

    if (token_hash && type) {
        const supabase = await createClient();

        const { error } = await supabase.auth.verifyOtp({
            type,
            token_hash,
        });

        if (!error) {
            redirect({ href: '/', locale: locale });
        }
    }

    redirect({ href: '/error', locale: locale });
}