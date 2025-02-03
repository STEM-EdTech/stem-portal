import '@emotion/react';
import { type Theme as CustomTheme } from '@mui/material/styles';

declare module '@emotion/react' {
    export interface Theme extends CustomTheme { }
}