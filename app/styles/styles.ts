import { FlexProps } from "@aws-amplify/ui-react";

// Responsive value helper — always order keys: base -> small -> medium -> large -> xl
export const rv = <T,>(values: Partial<Record<"base" | "small" | "medium" | "large" | "xl", T>>) => values;

// Spacing and gap presets using Amplify CSS variables
export const Gaps = {
  tight: rv({ base: "var(--amplify-space-xs)", medium: "var(--amplify-space-sm)" }),
  normal: rv({ base: "var(--amplify-space-sm)", medium: "var(--amplify-space-md)" }),
  wide: rv({ base: "var(--amplify-space-md)", medium: "var(--amplify-space-lg)" }),
} as const;

// Page horizontal padding
export const PagePaddingX = rv({ base: "var(--amplify-space-sm)", medium: "var(--amplify-space-xl)" });
export const PagePaddingY = rv({ base: "var(--amplify-space-md)", medium: "var(--amplify-space-lg)" });
// Use a literal since custom `sizes` token isn't supported by Amplify Tokens type
export const ContainerMaxWidth = "72rem";

// Header metrics
export const HeaderPadding = rv({
  base: "var(--amplify-space-sm) var(--amplify-space-md)",
  medium: "var(--amplify-space-md) var(--amplify-space-xl)",
});
export const HeaderZ = 10; // keep in sync with theme tokens

// Icon sizes in px for libraries that expect a number (e.g., lucide-react)
export const IconSize = {
  sm: 18,
  md: 20,
} as const;

// Footer metrics
export const FooterPadding = rv({
  base: "var(--amplify-space-sm) var(--amplify-space-md)",
  medium: "var(--amplify-space-md) var(--amplify-space-xl)",
});
export const FooterGap = rv({
  base: "var(--amplify-space-xs)",
  medium: "var(--amplify-space-sm)",
});

// Common header row layout
export const headerRow: Pick<
  FlexProps,
  "alignItems" | "width" | "direction" | "justifyContent" | "gap"
> = {
  alignItems: "center",
  width: "100%",
  direction: rv({ base: "column", medium: "row" }),
  justifyContent: rv({ base: "space-between", medium: "space-between" }),
  gap: rv({ base: "var(--amplify-space-sm)", medium: "0" }),
};
