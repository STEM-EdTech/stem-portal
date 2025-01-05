import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { login } from "./actions";
import { LoginPageContainer, LoginForm, TextInput, SubmitButton } from "~/app/[locale]/login/_components";
import { emailRegex } from "~/lib/zod";
import { Link } from "~/i18n/routing";

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
                <label>
                    {t("form__email")}
                    <TextInput
                        name="email"
                        type="email"
                        autoComplete="email"
                        pattern={emailRegex.toString()}
                        required
                    />
                </label>
                <label>
                    {t("form__password")}
                    <TextInput
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        minLength={8}
                        maxLength={32}
                        required
                    />
                </label>
                <input type="hidden" name="redirectTo" value="/" />
                <SubmitButton type="submit">{t("form__log_in")}</SubmitButton>
                <Link href="/register">{t("form__register")}</Link>
            </LoginForm>
        </LoginPageContainer>
    );
}