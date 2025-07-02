'use client';
import { createTheme } from '@mui/material/styles';
import { palette } from '~/theme/palette';

export const theme = createTheme({
    cssVariables: true,
    palette,
    typography: {
        fontFamily: 'var(--font-roboto)',
    },
    borderRadius: '4px',
    breakpoints: {
        values: {
            xs: 0,
            sm: 480,
            md: 769,
            lg: 1280,
            xl: 1920,
        },
    },
});
