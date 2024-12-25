import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
/* eslint-disable no-restricted-imports */
import { LinkProps as NextLinkProps } from "next/link";

export const routing = defineRouting({
    locales: ['en', 'pl'],
    defaultLocale: 'en',
    localeDetection: false,
    localePrefix: 'always'
});

export type LinkProps = Omit<NextLinkProps, 'locale'> & {
    locale?: string;
};

// Lightweight wrappers around Next.js' navigation APIs that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);