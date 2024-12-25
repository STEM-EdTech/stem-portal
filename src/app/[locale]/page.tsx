import { getTranslations, setRequestLocale } from "next-intl/server";
import { SEO } from "~/components/common/SEO/SEO";
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
            <SEO title={t("seo__title")} description={t("seo__description")} />
            <h1>{t("seo__title")}</h1>
            <p>{t("seo__description")}</p>
        </>
    );
}
