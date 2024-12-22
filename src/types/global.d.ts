import en from '~/i18n/translations/en.json';
import type { SupportedLocale } from "~/i18n";

type Messages = typeof en;

declare global {
    interface IntlMessages extends Messages { }

    /**
    * Base props type for all pages since they all receive the locale as a parameter.
    */
    declare type NextPageProps<P = object> = P & {
        params: Promise<{
            locale: SupportedLocale;
        }>;
    };
}