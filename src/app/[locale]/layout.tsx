import React from "react";
import type { Metadata, Viewport } from "next";
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { fontRoboto, Layout } from "~/components/common/Layout/Layout";
import type { SupportedLocale } from "~/i18n";
import { routing } from '~/i18n/routing';
import { ContextProvider } from "~/lib/ContextProvider";
import RootStyleRegistry from "~/lib/RootStyleRegistry";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { polyfill } from "interweave-ssr";
import { theme } from "~/theme/theme";

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
            <body className={fontRoboto.variable}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <RootStyleRegistry>
                            <CssBaseline />
                            <ContextProvider messages={messages} locale={locale}>
                                <Layout>
                                    {children}
                                </Layout>
                            </ContextProvider>
                        </RootStyleRegistry>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
};