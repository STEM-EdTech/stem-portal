import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Header, LogoutButton } from "~/app/[locale]/_components";
import { signOut } from "~/auth";

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
        await signOut({
            redirect: true,
            redirectTo: "/login"
        });
    };

    return (
        <>
            <Header>User Dashboard</Header>
            <LogoutButton onClick={logoutButtonHandler}>{t("logout")}</LogoutButton>
        </>
    );
}
