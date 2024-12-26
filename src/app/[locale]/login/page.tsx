import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { signIn } from "~/auth";

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
        <form
            action={async (formData) => {
                "use server";
                await signIn("credentials", formData);
            }}
        >
            <label>
                {t("form__email")}
                <input name="email" type="email" />
            </label>
            <label>
                {t("form__password")}
                <input name="password" type="password" />
            </label>
            <button>{t("form__log_in")}</button>
        </form>
    );
}