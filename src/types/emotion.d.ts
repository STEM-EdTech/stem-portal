import '@emotion/react';
import { CustomTheme } from '~/theme/theme';

declare module '@emotion/react' {
    export interface Theme extends CustomTheme { }
}