"use client";

import React from "react";
import {View, type ViewProps} from "@aws-amplify/ui-react";
import {ContainerMaxWidth, PagePaddingX, PagePaddingY,} from "@/app/styles/styles";

type SemanticElement = keyof JSX.IntrinsicElements;

type ContainerBaseProps = Omit<ViewProps, "as">;

type ContainerProps = ContainerBaseProps & {
    noPaddingX?: boolean;
    noPaddingY?: boolean;
    as?: SemanticElement;
};


export function Container({
                              noPaddingX,
                              noPaddingY,
                              as = "div",
                              ...rest
                          }: ContainerProps) {
    const paddingInline = noPaddingX ? undefined : PagePaddingX;
    const paddingBlock = noPaddingY ? undefined : PagePaddingY;

    return (
        <View
            as={as as unknown as ViewProps["as"]}
            paddingInline={paddingInline}
            paddingBlock={paddingBlock}
            maxWidth={ContainerMaxWidth}
            margin="0 auto"
            {...rest}
        />
    );
}
