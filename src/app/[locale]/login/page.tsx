import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { signIn } from "~/auth";
import { LoginPageContainer, LoginForm, TextInput, SubmitButton } from "~/app/[locale]/login/_components";

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
            <LoginForm
                action={async (formData) => {
                    "use server";
                    await signIn("credentials", formData);
                }}
            >
                <label>
                    {t("form__email")}
                    <TextInput
                        name="email"
                        type="email"
                        autoComplete="email"
                        pattern="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
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
                <SubmitButton>{t("form__log_in")}</SubmitButton>
            </LoginForm>
        </LoginPageContainer>
    );
}