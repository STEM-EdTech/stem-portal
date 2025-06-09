import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { login } from "./actions";
import { LoginPageContainer, LoginForm } from "~/app/[locale]/login/_components";
import { emailRegex } from "~/lib/zod";
import { Link } from "~/i18n/routing";
import { Button, TextField, Typography } from "@mui/material";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("LogInPage");

    return {
        title: t("seo__title"),
        description: t("seo__description")
    };
}

export default async function LogInPage({ params }: NextPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: "LogInPage" });

    return (
        <LoginPageContainer>
            <LoginForm action={login}>
                <Typography variant="h5">{t("seo__title")}</Typography>
                <TextField
                    name="email"
                    type="email"
                    label={t("form__email")}
                    autoComplete="email"
                    slotProps={{
                        htmlInput: { pattern: emailRegex.source }
                    }}
                    required
                />

                <TextField
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    label={t("form__password")}
                    slotProps={{
                        htmlInput: { minLength: 8, maxLength: 32 }
                    }}
                    required
                />
                <input type="hidden" name="redirectTo" value="/" />
                <Button variant="contained" color="primary" type="submit">{t("form__log_in")}</Button>
                <Link href="/register" style={{
                    color: "black"
                }}>{t("form__register")}</Link>
            </LoginForm>
        </LoginPageContainer>
    );
}