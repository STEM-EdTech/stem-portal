import React from "react";
import type { Metadata, Viewport } from "next";
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Layout } from "~/components/common/Layout/Layout";
import type { SupportedLocale } from "~/i18n";
import { routing } from '~/i18n/routing';
import { ContextProvider } from "~/lib/ContextProvider";
import RootStyleRegistry from "~/lib/RootStyleRegistry";
import { polyfill } from "interweave-ssr";
polyfill();

export const metadata: Metadata = {
    title: "Next.js Site",
    description: "Web site created using NextJS",
    icons: {
        icon: "/icon.jpg",
        apple: "/icon.jpg",
    }
};

export const viewport: Viewport = {
    themeColor: '#787d87',
    initialScale: 1,
    maximumScale: 3
};

type LocaleLayoutProps = {
    children: React.ReactNode;
    params: Promise<{
        locale: SupportedLocale;
    }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const { locale } = await params;
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    setRequestLocale(locale);
    const messages = await getMessages({ locale });

    return (
        <html lang={locale}>
            <body>
                <RootStyleRegistry>
                    <ContextProvider messages={messages} locale={locale}>
                        <Layout>
                            {children}
                        </Layout>
                    </ContextProvider>
                </RootStyleRegistry>
            </body>
        </html>
    );
};