export const getFullStyleName = (name: string, tag: string, variantName: string,) => {
    const baseStyleName = name || tag;
    const fullStyleName =
        baseStyleName +
        variantName.charAt(0).toUpperCase() +
        variantName.slice(1);

    return fullStyleName
}