import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Heading } from "./_components";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("TermsPage");

    return {
        title: t("seo__title"),
        description: t("seo__description")
    };
}

export default async function TermsPage({ params }: NextPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: "TermsPage" });

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <Heading>{t("terms__title")}</Heading>
        </div>
    );
}