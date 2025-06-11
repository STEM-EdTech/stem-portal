"use server";

import { createClient } from "~/lib/supabase/server";
import { redirect } from "~/i18n/routing";

export async function logoutAction(locale: string) {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut({ scope: 'local' });
    if (error) {
        console.error('error', error);
        return;
    }

    redirect({ href: '/login', locale });
} 