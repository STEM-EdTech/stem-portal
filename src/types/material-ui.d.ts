import {
    Palette as MuiPalette,
    PaletteOptions as MuiPaletteOptions,
    PaletteColor as MuiPaletteColor
} from '@mui/material/styles';
import { ThemeOptions as MuiThemeOptions } from '@mui/material/styles';

declare module "@mui/material/styles" {
    export interface PaletteOptions extends MuiPaletteOptions {
        // Custom palette colours here
    }

    export interface Palette extends MuiPallete {
        // Custom palette colours here
    }
    export interface ThemeOptions extends MuiThemeOptions {
        borderRadius: string;
    }
}
