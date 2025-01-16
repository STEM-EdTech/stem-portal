import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import React from 'react';
import { Heading, RegisterForm, RegisterPageContainer, SubmitButton, TextInput, Divider, FormFooter, SubHeading, IconInput, InputContainer } from "~/app/[locale]/register/_components";
import { register } from "~/app/[locale]/register/actions";
import { Link } from "~/i18n/routing";
import { emailRegex } from "~/lib/zod";
import { CheckboxInput } from "./_components/CheckboxInput";
import { FaEnvelope, FaLock } from "react-icons/fa";

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

                <Divider>
                    <span>{t("form__or_register_with")}</span>
                </Divider>

                <label>
                    <InputContainer>
                        <IconInput>
                            <FaEnvelope />
                        </IconInput>
                        <TextInput
                            name="email"
                            type="email"
                            autoComplete="email"
                            pattern={emailRegex.toString()}
                            placeholder={t("form__placeholder__email")}
                            required
                        />
                    </InputContainer>
                </label>
                <label>
                <InputContainer>
                        <IconInput>
                            <FaLock />
                        </IconInput>
                    <TextInput
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        minLength={8}
                        maxLength={32}
                        placeholder={t("form__placeholder__password")}
                        required
                    />
                </InputContainer>    
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
                <Link href="/login">{t("form__login")}</Link>
            </RegisterForm>
        </RegisterPageContainer>
    );
}