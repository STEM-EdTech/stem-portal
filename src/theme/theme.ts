type ColorProgression = {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
};

export type CustomTheme = {
    palette: {
        primary: ColorProgression;
        grey: ColorProgression;
        secondary: ColorProgression;
        accent: ColorProgression;
        text: string;
    };
    borderRadius: string;
};

export const theme: CustomTheme = {
    palette: {
        primary: {
            50: '#f8fbff',
            100: '#e2f0ff',
            200: '#beddff',
            300: '#8cc2ff',
            400: '#4c9fff',
            500: '#0076fc',
            600: '#004a9f',
            700: '#001833',
            800: '#000b17',
            900: '#000306',
            950: '#000000'
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
            900: '#191d24',
            950: '#15181e'
        },
        secondary: {
            50: '#fafeff',
            100: '#ebfafe',
            200: '#d2f5fd',
            300: '#afecfc',
            400: '#83e2fa',
            500: '#4cd5f8',
            600: '#0bc6f5',
            700: '#078bab',
            800: '#045467',
            900: '#03333f',
            950: '#022831'
        },
        accent: {
            50: '#fffcfb',
            100: '#fef3ef',
            200: '#fde3da',
            300: '#fccdbe',
            400: '#fab199',
            500: '#f78f6c',
            600: '#f46637',
            700: '#df410c',
            800: '#7e2407',
            900: '#441404',
            950: '#300e03'
        },
        text: '#141619'
    },
    borderRadius: '4px'
};
