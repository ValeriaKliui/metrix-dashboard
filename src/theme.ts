'use client';
import { createTheme } from "@mui/material";
import { BASE_FONT_SIZE, HEADING_VARIANTS, INTER, PARAGRAPH_VARIANTS, POPPINS } from "./constans/fonts";
import { getTypographyForFont } from "./utilities/fonts/getTypographyForFont";
import { getVariantMapping } from "./utilities/fonts/getVariantMapping";
import { lightBlue, lime } from "@mui/material/colors";

const theme = createTheme({
    typography: {
        fontSize: BASE_FONT_SIZE,
        ...getTypographyForFont(POPPINS, HEADING_VARIANTS),
        ...getTypographyForFont(INTER, PARAGRAPH_VARIANTS),
    },
    palette: {
        primary: {
            '100': lightBlue[100],
            '200': lightBlue[200],
            '300': lightBlue[300],
            '400': lightBlue[400],
            '500': lightBlue[500],
            '600': lightBlue[600],
            '700': lightBlue[700],
            '800': lightBlue[800],
            '900': lightBlue[900],
        },
        secondary: lime,
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: getVariantMapping([...HEADING_VARIANTS, ...PARAGRAPH_VARIANTS]),
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    margin: 0,
                }
            }
        }
    },
});

export default theme;
