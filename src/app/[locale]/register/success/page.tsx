import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import React from 'react';
import { RegisterPageContainer } from "../_components";
import { Typography, Button } from "@mui/material";
import { Link } from "~/i18n/routing";
import { SuccessContainer } from "./_components/SuccessContainer";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("RegisterSuccessPage");

    return {
        title: t("seo__title"),
        description: t("seo__description")
    };
}

export default async function RegisterSuccessPage({ params }: NextPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: "RegisterSuccessPage" });

    return (
        <RegisterPageContainer>
            <SuccessContainer>
                <Typography variant="h4">{t("title")}</Typography>
                <Typography variant="body1">{t("message")}</Typography>
                <Link href="/login">
                    <Button variant="contained" color="primary">
                        {t("login_button")}
                    </Button>
                </Link>
            </SuccessContainer>
        </RegisterPageContainer>
    );
} 