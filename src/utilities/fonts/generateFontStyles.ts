import { BASE_FONT_SIZE } from "@/constans/fonts";
import { ElementDefinition, FontStylesMap, FontWeightVariants } from "./interfaces";
import { getFullStyleName } from "./getFullStyleName";

const rem = (px: number) => `${px / BASE_FONT_SIZE}rem`

export const generateFontStyles = (
    element: ElementDefinition,
    fontFamily: string,
    variants: FontWeightVariants
): FontStylesMap => {
    const styles: FontStylesMap = {};
    const { tag, name = '', size } = element

    for (const [variantName, fontWeight] of Object.entries(variants)) {
        const fullStyleName = getFullStyleName(name, tag, variantName)

        styles[fullStyleName] = {
            fontSize: rem(size),
            fontWeight,
            fontFamily,
        };
    }

    return styles;
};

