'use client';
import { createTheme } from '@mui/material/styles';
import { palette } from '~/theme/palette';

export const theme = createTheme({
    cssVariables: true,
    palette,
    typography: {
        fontFamily: 'var(--font-roboto)',
    },
    borderRadius: '4px'
});
