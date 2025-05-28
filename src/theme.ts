'use client';

import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/400.css';

const poppins = 'Poppins';
const inter = 'Inter';
const defaultFontSize = 16;
const rem = (px: number) => `${px / defaultFontSize}rem`;

const fonts = {
    poppins: [{
        h1: { size: 64 }
    },
    { h2: { size: 51 }, },
    { h3: { size: 45 } },
    { h4: { size: 32, name: 'subHeading1' }, },
    { h5: { size: 29, name: 'subHeading2' }, },
    { h6: { size: 21, name: 'subHeading3' }, },
    ],
    inter: [{
        p: { size: 16, name: 'paragraph1' },
    }, {
        p: { size: 14, name: 'paragraph2' },
    }]
}


const theme = createTheme({
    typography: {
        fontSize: defaultFontSize,

        h1Bold: {
            fontFamily: poppins,
            fontSize: rem(64),
            fontWeight: 700,
        },
        h1Medium: {
            fontFamily: poppins,
            fontSize: rem(64),
            fontWeight: 500,
        },
        h1Regular: {
            fontFamily: poppins,
            fontSize: rem(64),
            fontWeight: 400,
        },

        h2Bold: {
            fontFamily: poppins,
            fontSize: rem(51),
            fontWeight: 700,
        },
        h2Medium: {
            fontFamily: poppins,
            fontSize: rem(51),
            fontWeight: 500,
        },
        h2Regular: {
            fontFamily: poppins,
            fontSize: rem(51),
            fontWeight: 400,
        },

        h3Bold: {
            fontFamily: poppins,
            fontSize: rem(45),
            fontWeight: 700,
        },
        h3Medium: {
            fontFamily: poppins,
            fontSize: rem(45),
            fontWeight: 500,
        },
        h3Regular: {
            fontFamily: poppins,
            fontSize: rem(45),
            fontWeight: 400,
        },

        subHeading1Bold: {
            fontFamily: poppins,
            fontSize: rem(32),
            fontWeight: 700,
        },
        subHeading1Medium: {
            fontFamily: poppins,
            fontSize: rem(32),
            fontWeight: 500,
        },
        subHeading1Regular: {
            fontFamily: poppins,
            fontSize: rem(32),
            fontWeight: 400,
        },

        subHeading2Bold: {
            fontFamily: poppins,
            fontSize: rem(29),
            fontWeight: 700,
        },
        subHeading2Medium: {
            fontFamily: poppins,
            fontSize: rem(29),
            fontWeight: 500,
        },
        subHeading2Regular: {
            fontFamily: poppins,
            fontSize: rem(29),
            fontWeight: 400,
        },

        subHeading3Bold: {
            fontFamily: poppins,
            fontSize: rem(21),
            fontWeight: 700,
        },
        subHeading3Medium: {
            fontFamily: poppins,
            fontSize: rem(21),
            fontWeight: 500,
        },
        subHeading3Regular: {
            fontFamily: poppins,
            fontSize: rem(21),
            fontWeight: 400,
        },

        paragraph1Bold: {
            fontFamily: inter,
            fontSize: rem(16),
            fontWeight: 700,
        },
        paragraph1Medium: {
            fontFamily: inter,
            fontSize: rem(16),
            fontWeight: 500,
        },
        paragraph1Regular: {
            fontFamily: inter,
            fontSize: rem(16),
            fontWeight: 400,
        },

        paragraph2Bold: {
            fontFamily: inter,
            fontSize: rem(14),
            fontWeight: 700,
        },
        paragraph2Medium: {
            fontFamily: inter,
            fontSize: rem(14),
            fontWeight: 500,
        },
        paragraph2Regular: {
            fontFamily: inter,
            fontSize: rem(14),
            fontWeight: 400,
        },
    },

    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1Bold: 'h1',
                    h1Medium: 'h1',
                    h1Regular: 'h1',
                    h2Bold: 'h2',
                    h2Medium: 'h2',
                    h2Regular: 'h2',
                    h3Bold: 'h3',
                    h3Medium: 'h3',
                    h3Regular: 'h3',
                    subHeading1Bold: 'h4',
                    subHeading1Medium: 'h4',
                    subHeading1Regular: 'h4',
                    subHeading2Bold: 'h5',
                    subHeading2Medium: 'h5',
                    subHeading2Regular: 'h5',
                    subHeading3Bold: 'h6',
                    subHeading3Medium: 'h6',
                    subHeading3Regular: 'h6',
                    paragraph1Bold: 'p',
                    paragraph1Medium: 'p',
                    paragraph1Regular: 'p',
                    paragraph2Bold: 'p',
                    paragraph2Medium: 'p',
                    paragraph2Regular: 'p',
                },
            },
        },
    },
});

export default theme;
