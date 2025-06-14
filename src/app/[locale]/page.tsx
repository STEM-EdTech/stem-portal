import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { ClientPage } from "./ClientPage";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("HomePage");
    return {
        title: t("seo__title"),
        description: t("seo__description"),
    };
}

export default async function Home({ params }: NextPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <ClientPage />;
}
