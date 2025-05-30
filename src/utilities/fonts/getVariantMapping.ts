import { FONT_WEIGHT_VARIANTS } from "@/constans/fonts"
import { getFullStyleName } from "./getFullStyleName"
import { ElementDefinition, FontVariantMap } from "./interfaces"

export const getVariantMapping = (fontVariants: ElementDefinition[]) => {
    const result: FontVariantMap = {}

    for (const { tag, name = '' } of fontVariants) {
        for (const [variantName] of Object.entries(FONT_WEIGHT_VARIANTS)) {
            const fullStyleName = getFullStyleName(name, tag, variantName)
            result[fullStyleName] = tag
        }
    }

    return result
}
