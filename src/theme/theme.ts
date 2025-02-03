'use client';
import { createTheme } from '@mui/material/styles';
import createPalette from "@mui/material/styles/createPalette";

export const theme = createTheme({
    cssVariables: true,
    palette: createPalette({
        primary: {
            light: '#8cc2ff',
            main: '#0076fc',
            dark: '#004a9f',
            contrastText: '#fff'
        },
        grey: {
            50: '#fcfcfd',
            100: '#f1f3f6',
            200: '#e0e4ea',
            300: '#c8ced9',
            400: '#a8b3c4',
            500: '#8292aa',
            600: '#5b6b86',
            700: '#384252',
            800: '#242b35',
            900: '#191d24'
        },
        secondary: {
            light: '#afecfc',
            main: '#4cd5f8',
            dark: '#078bab',
            contrastText: '#fff'
        },
        accent: {
            light: '#fccdbe',
            main: '#f78f6c',
            dark: '#441404',
            contrastText: '#fff'
        },
        text: { primary: '#141619' }
    }),
    typography: {
        fontFamily: 'var(--font-roboto)',
    },
    borderRadius: '4px'
});
