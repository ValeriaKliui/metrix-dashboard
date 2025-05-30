import { BASE_FONT_SIZE, FONT_WEIGHT_VARIANTS } from "@/constans/fonts";
import { generateFontStyles } from "./generateFontStyles";
import { ElementDefinition } from "./interfaces";

export const getTypographyForFont = (font: string, elementsDefinition: ElementDefinition[]) => {
    const typography = elementsDefinition.map((type) =>
        generateFontStyles(type, font, FONT_WEIGHT_VARIANTS)
    ).reduce(((acc, curr) => ({ ...acc, ...curr })), {});

    return typography;
};