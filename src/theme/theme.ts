export type CustomTheme = {
    palette: {
        text: string;
        textBackground: string;
        main: string;
        light: string;
        accent: string;
        specialColours: {
            grey: string;
            blue: string;
            body: string;
        };
    };
};

export const theme: CustomTheme = {
    palette: {
        text: '#141619',
        textBackground: '#ffffff',
        main: '#2d3245',
        light: '#0083db',
        accent: '#e5c100',
        specialColours: {
            grey: '#eee',
            blue: '#2d3245',
            body: '#787d87',
        },
    },
};