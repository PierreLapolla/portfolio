"use client";

import {ReactNode} from "react";
import {Flex, ThemeProvider, View, defaultDarkModeOverride} from "@aws-amplify/ui-react";

type AppShellProps = {
    header: ReactNode;
    footer: ReactNode;
    children: ReactNode;
};

const theme = {
    name: "my-theme",
    overrides: [defaultDarkModeOverride],
};

export function AppShell({header, footer, children}: AppShellProps) {
    return (
        <ThemeProvider theme={theme} colorMode="system">
            <Flex as="div" direction="column" minHeight="100vh">
                {header}
                <View as="main" flex="1 0 auto">
                    {children}
                </View>
                {footer}
            </Flex>
        </ThemeProvider>
    );
}
