import Button from "@mui/material/Button";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import React from 'react';
import { Heading, RegisterForm, RegisterPageContainer, TextInput, Divider, FormFooter, SubHeading,  CheckboxInput, SocialButtonsContainer, SocialButton, FooterLink } from "~/app/[locale]/register/_components";
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
                    /> 
                    {t("form__terms")} <Link href="/terms-and-conditions">{t("form__terms__link")}</Link>
                </label>
                <Button variant="contained" color="primary" type="submit">{t("form__submit")}</Button>
                
                <FormFooter>
                    {t("form__already__have__account")}
                    <FooterLink href="/login">{t("form__login")}</FooterLink>
                </FormFooter>
            </RegisterForm>
        </RegisterPageContainer>
    );
}