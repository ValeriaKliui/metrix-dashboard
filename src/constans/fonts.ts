import { ElementDefinition } from "@/utilities/fonts/interfaces";

export const POPPINS = "Poppins";

export const INTER = "Inter";

export const BASE_FONT_SIZE = 16;

export const FONT_WEIGHT_VARIANTS = {
    bold: 700,
    medium: 500,
    regular: 400,
};

export const HEADING_VARIANTS: ElementDefinition[] = [
    { tag: 'h1', size: 64 },
    { tag: 'h2', size: 51 },
    { tag: 'h3', size: 45 },
    { tag: 'h4', size: 32, name: 'subHeading1' },
    { tag: 'h5', size: 29, name: 'subHeading2' },
    { tag: 'h6', size: 21, name: 'subHeading3' },
];

export const PARAGRAPH_VARIANTS = [
    { tag: 'p', size: 16, name: 'paragraph1' },
    { tag: 'p', size: 14, name: 'paragraph2' },
];