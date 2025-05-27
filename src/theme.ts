'use client';
import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/400.css';

const theme = createTheme(
    {
        typography: {
            fontSize: 16,
            h1: {
                fontFamily: 'Poppins',
                fontSize: "4rem",
                fontWeight: "700",
            },
            h2: {
                fontFamily: 'Poppins',
                fontSize: "3.2rem",
                fontWeight: "700",
            },
            h3: {
                fontFamily: 'Poppins',
                fontSize: "2.8rem",
                fontWeight: "700",
            },
            h4: {
                fontFamily: 'Poppins',
                fontSize: "2rem",
                fontWeight: "700",
            },
            h5: {
                fontFamily: 'Poppins',
                fontSize: "1.8rem",
                fontWeight: "700",
            },
            h6: {
                fontFamily: 'Poppins',
                fontSize: "1.3rem",
                fontWeight: "700",
            },
            body1: {
                fontFamily: 'Inter',
                fontSize: "1rem",
                fontWeight: "400",
            },
            body2: {
                fontFamily: 'Inter',
                fontSize: "0.9rem",
                fontWeight: "400",
            },
        },
    }
)

export default theme;
