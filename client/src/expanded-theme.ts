
declare module "@mui/material/styles/createPalette" {
    interface PaleteColor {
        [key: number]: string;
    }

    interface Palete {
        tertiary: PaleteColor
    }
}