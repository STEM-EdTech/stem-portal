import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import React from 'react';
import { Heading, RegisterForm, RegisterPageContainer, SubmitButton, TextInput } from "~/app/[locale]/register/_components";
import { register } from "~/app/[locale]/register/actions";
import { Link } from "~/i18n/routing";
import { emailRegex } from "~/lib/zod";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("RegisterPage");

    return {
        title: t("seo__title"),
        description: t("seo__description")
    };
}

export default async function RegisterPage({ params }: NextPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: "RegisterPage" });

    return (
        <RegisterPageContainer>
            <RegisterForm action={register}>
                <Heading>{t("seo__title")}</Heading>
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
                        autoComplete="new-password"
                        minLength={8}
                        maxLength={32}
                        required
                    />
                </label>
                <label>
                    {t("form__confirm_password")}
                    <TextInput
                        name="confirm_password"
                        type="password"
                        autoComplete="new-password"
                        minLength={8}
                        maxLength={32}
                        required
                    />
                </label>
                <SubmitButton type="submit">{t("form__submit")}</SubmitButton>
                <Link href="/login">{t("form__login")}</Link>
            </RegisterForm>
        </RegisterPageContainer>
    );
}