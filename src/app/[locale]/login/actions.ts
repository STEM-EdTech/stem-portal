'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from "~/i18n/routing";
import { getLocale } from 'next-intl/server';
import { createClient } from '~/lib/supabase/server';
import { signInSchema } from "~/lib/zod";

export async function login(formData: FormData) {
    const supabase = await createClient();

    const credentials = await signInSchema.parseAsync({
        email: formData.get('email') as string,
        password: formData.get('password') as string
    });

    const { error } = await supabase.auth.signInWithPassword(credentials);
    const locale = await getLocale();

    if (error) {
        redirect({ href: '/error', locale });
    }

    revalidatePath('/', 'layout');
    redirect({ href: '/', locale });
}
