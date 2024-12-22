"use client";
import React, { type ReactNode } from 'react';
import { ThemeProvider } from "@emotion/react";
import { NextIntlClientProvider, type AbstractIntlMessages } from "next-intl";
import { theme } from "~/theme/theme";
import type { SupportedLocale } from "~/i18n";
import { GlobalStyles } from "~/theme/global-styles";

export function ContextProvider({
    children,
    messages,
    locale,
}: {
    children: ReactNode;
    messages: AbstractIntlMessages;
    locale: SupportedLocale;
}) {
    return (
        <NextIntlClientProvider
            locale={locale}
            timeZone="Europe/Warsaw"
            messages={messages}
        >
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </NextIntlClientProvider>
    );
}