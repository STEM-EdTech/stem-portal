'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from "~/i18n/routing";
import { getLocale } from 'next-intl/server';
import { createClient } from '~/lib/supabase/server';
import { signInSchema } from "~/lib/zod";
import type { SignUpWithPasswordCredentials } from "@supabase/supabase-js";

export async function register(formData: FormData) {
    const supabase = await createClient();
    const locale = await getLocale();
    const redirectTo = formData.get('redirectTo') as string ?? "/";

    const parsedCredentials = await signInSchema.parseAsync({
        email: formData.get('email') as string,
        password: formData.get('password') as string
    });

    const credentials: SignUpWithPasswordCredentials = {
        ...parsedCredentials,
        options: {
            emailRedirectTo: `/${locale}` + redirectTo
        }
    };

    const { error } = await supabase.auth.signUp(credentials);

    if (error) {
        redirect({ href: '/error', locale });
    }

    revalidatePath(redirectTo, 'layout');
    redirect({ href: redirectTo, locale });
}
