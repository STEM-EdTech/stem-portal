import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

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

    return (
        <>
            <h1>{t("seo__title")}</h1>
            <p>{t("seo__description")}</p>
        </>
    );
}
