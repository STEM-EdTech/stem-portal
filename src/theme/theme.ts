'use client';
import { createTheme } from '@mui/material/styles';
import createPalette from "@mui/material/styles/createPalette";
import { palette } from '~/theme/palette';

export const theme = createTheme({
    cssVariables: true,
    palette: createPalette(palette),
    typography: {
        fontFamily: 'var(--font-roboto)',
    },
    borderRadius: '4px'
});
