import {FlexProps} from "@aws-amplify/ui-react";

// Responsive value helper — always order keys: base -> small -> medium -> large -> xl
export const rv = <T, >(values: Partial<Record<"base" | "small" | "medium" | "large" | "xl", T>>) => values;

// Shorthand for common base/medium responsive values
export const R2 = <T, >(base: T, medium: T) => rv({base, medium});

// Space tokens as convenient constants (CSS variables)
export const S = {
    xxs: "var(--amplify-space-xxs)",
    xs: "var(--amplify-space-xs)",
    sm: "var(--amplify-space-sm)",
    md: "var(--amplify-space-md)",
    lg: "var(--amplify-space-lg)",
    xl: "var(--amplify-space-xl)",
    xxl: "var(--amplify-space-xxl)",
} as const;

// Spacing and gap presets using Amplify CSS variables
export const Gaps = {
    tight: R2(S.xs, S.sm),
    normal: R2(S.sm, S.md),
    wide: R2(S.md, S.lg),
} as const;

// Page horizontal padding
export const PagePaddingX = R2(S.sm, S.xl);
export const PagePaddingY = R2(S.md, S.lg);
// Use a literal since custom `sizes` token isn't supported by Amplify Tokens type
export const ContainerMaxWidth = "72rem";

// Header metrics
export const HeaderPadding = rv({
    base: `${S.sm} ${S.md}`,
    medium: `${S.md} ${S.xl}`,
});
export const HeaderZ = 10; // keep in sync with theme tokens

// Icon sizes in px for libraries that expect a number (e.g., lucide-react)
export const IconSize = {
    sm: 18,
    md: 20,
} as const;

// Footer metrics
export const FooterPadding = rv({
    base: `${S.sm} ${S.md}`,
    medium: `${S.md} ${S.xl}`,
});
export const FooterGap = rv({
    base: S.xs,
    medium: S.sm,
});

// Common header row layout
export const headerRow: Pick<
    FlexProps,
    "alignItems" | "width" | "direction" | "justifyContent" | "gap"
> = {
    alignItems: "center",
    width: "100%",
    direction: R2("column", "row"),
    justifyContent: R2("space-between", "space-between"),
    gap: R2(S.sm, "0"),
};
