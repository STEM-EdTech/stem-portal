import {
    Palette as MuiPallete,
    PaletteOptions as MuiPaletteOptions,
    PaletteColor as MuiPaletteColor
} from '@mui/material/styles/createPalette';
import { ThemeOptions as MuiThemeOptions } from '@mui/material/styles';

declare module "@mui/material/styles/createPalette" {
    export interface PaletteOptions extends MuiPaletteOptions {
        accent: MuiPaletteColor;
    }

    export interface Palette extends MuiPallete {
        accent: MuiPaletteColor;
    }
}

declare module "@mui/material/styles" {
    export interface ThemeOptions extends MuiThemeOptions {
        borderRadius: string;
    }
}