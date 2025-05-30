export type ElementDefinition = {
    tag: string;
    size: number;
    name?: string;
};

export type FontStylesMap = {
    [styleName: string]: FontStyle;
};


export type FontWeightVariants = {
    [variantName: string]: number;
};


export type FontStyle = {
    fontSize: string;
    fontWeight: number | string;
    fontFamily: string;
};

export type FontVariantMap = {
    [fontName: string]: string;
};
