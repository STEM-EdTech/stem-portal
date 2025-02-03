import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import React from 'react';
import { register } from "~/app/[locale]/register/actions";
import { Link } from "~/i18n/routing";
import { emailRegex } from "~/lib/zod";
import { Heading, RegisterForm, RegisterPageContainer, SubmitButton, Divider, FormFooter, SubHeading, TextInput, CheckboxInput, SocialButtonsContainer, SocialButton } from './_components/formComponents';

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
                <SubHeading>{t("seo__subtitle")}</SubHeading>

                <SocialButtonsContainer>
                    <SocialButton>Google</SocialButton>
                    <SocialButton>Apple</SocialButton>
                </SocialButtonsContainer>

                <Divider>{t("form__or_register_with")}</Divider>

                <label>
                    <TextInput
                        icon={<img src="https://7i2wrzbr0panhthc.public.blob.vercel-storage.com/static/icons/envelope.svg" alt="icon" />}
                        name="email"
                        type="email"
                        autoComplete="email"
                        pattern={emailRegex.toString()}
                        placeholder={t("form__placeholder__email")}
                        required
                    />
                </label>
                <label>
                        <TextInput
                            icon={<img src="https://7i2wrzbr0panhthc.public.blob.vercel-storage.com/static/icons/lock.svg" alt="icon" />}
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            minLength={8}
                            maxLength={32}
                            placeholder={t("form__placeholder__password")}
                            required
                        />
                    
                </label>

                <label>
                    <CheckboxInput
                        name="terms"
                        type="checkbox"
                        required
                    /> {t("form__terms")}

                </label>
                <SubmitButton type="submit">{t("form__submit")}</SubmitButton>
                <FormFooter>
                    {t("form__already__have__account")}
                    <Link href="/login">{t("form__sign__in")}</Link>
                </FormFooter>
            </RegisterForm>
        </RegisterPageContainer>
    );
}