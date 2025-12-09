"use client";

import React from "react";
import { View, type ViewProps } from "@aws-amplify/ui-react";
import { ContainerMaxWidth, PagePaddingX, PagePaddingY } from "@/app/styles/styles";

type ContainerProps = Omit<ViewProps, "as"> & {
  /**
   * Disable default horizontal padding that comes from PagePaddingX
   */
  noPaddingX?: boolean;
  /**
   * Disable default vertical padding that comes from PagePaddingY
   */
  noPaddingY?: boolean;
  /**
   * Semantic tag to render as (e.g., "main", "section").
   * Amplify's types are restrictive, so we type this as any and cast.
   */
  as?: any;
};

/**
 * App-wide content container providing:
 * - centered layout (margin auto)
 * - maxWidth constraint
 * - responsive default paddings (PagePaddingX/Y)
 * You can opt-out of paddings per axis with noPaddingX/noPaddingY.
 */
export function Container({ noPaddingX, noPaddingY, as = "div", ...rest }: ContainerProps) {
  const paddingInline = noPaddingX ? undefined : PagePaddingX;
  const paddingBlock = noPaddingY ? undefined : PagePaddingY;

  return (
    <View
      as={as as any}
      paddingInline={paddingInline}
      paddingBlock={paddingBlock}
      maxWidth={ContainerMaxWidth}
      margin="0 auto"
      {...rest}
    />
  );
}
