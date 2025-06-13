import '@mui/material/styles';
import '@mui/material/Typography';

type Weight = 'Bold' | 'Medium' | 'Regular';
type HeadingLevel = 'h1' | 'h2' | 'h3';
type SubHeadingLevel = 'subHeading1' | 'subHeading2' | 'subHeading3';
type ParagraphLevel = 'paragraph1' | 'paragraph2';

type VariantName<T extends string> = `${T}${Weight}`;

type AllVariantKeys =
    | VariantName<HeadingLevel>
    | VariantName<SubHeadingLevel>
    | VariantName<ParagraphLevel>;

declare module '@mui/material/styles' {
    interface TypographyVariants extends Record<AllVariantKeys, React.CSSProperties> { }

    interface TypographyVariantsOptions extends Partial<Record<AllVariantKeys, React.CSSProperties>> { }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides extends Record<AllVariantKeys, true> { }
}
declare module '@mui/material/styles' {
    interface PaletteColor {
        darker?: string;
    }

    interface SimplePaletteColorOptions {
        darker?: string;
    }
}