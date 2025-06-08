import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Header, LogoutButton } from "~/app/[locale]/_components";
import { createClient } from "~/lib/supabase/server";
import { redirect } from "~/i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("HomePage");

    return {
        title: t("seo__title"),
        description: t("seo__description")
    };
}

export default async function Home({ params }: NextPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: "HomePage" });

    const logoutButtonHandler = async () => {
        "use server";
        const supabase = await createClient();
        const { error } = await supabase.auth.signOut({ scope: 'local' });
        if (error) {
            console.error('error', error);
            return;
        }

        redirect({ href: '/login', locale });
    };

    return (
        <>
            <Header>User Dashboard</Header>
            <LogoutButton onClick={logoutButtonHandler} variant="contained" color="primary">{t("logout")}</LogoutButton>
        </>
    );
}
