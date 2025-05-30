'use client';
import { createTheme } from "@mui/material";
import { BASE_FONT_SIZE, FONT_WEIGHT_VARIANTS, HEADING_VARIANTS, INTER, PARAGRAPH_VARIANTS, POPPINS } from "./constans/fonts";
import { getTypographyForFont } from "./utilities/fonts/getTypographyForFont";
import { getVariantMapping } from "./utilities/fonts/getVariantMapping";

const theme = createTheme({
    typography: {
        fontSize: BASE_FONT_SIZE,
        ...getTypographyForFont(POPPINS, HEADING_VARIANTS),
        ...getTypographyForFont(INTER, PARAGRAPH_VARIANTS),
    },

    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: getVariantMapping([...HEADING_VARIANTS, ...PARAGRAPH_VARIANTS]),
            },
        },
    },
});

export default theme;
