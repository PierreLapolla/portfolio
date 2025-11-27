"use client";

import React, {ReactNode} from "react";
import {ColorMode, defaultDarkModeOverride, Flex, ThemeProvider, View,} from "@aws-amplify/ui-react";

type AppShellProps = {
    header: ReactNode;
    footer: ReactNode;
    children: ReactNode;
};

const theme = {
    name: "my-theme",
    overrides: [defaultDarkModeOverride],
    tokens: {
        fonts: {
            default: {
                variable: {value: 'var(--font-jetbrains-mono)'},
                static: {value: 'var(--font-jetbrains-mono)'},
            }
        }
    }
};

type ColorModeContextValue = {
    colorMode: ColorMode;
    toggleColorMode: () => void;
};

const ColorModeContext = React.createContext<ColorModeContextValue | null>(null);

export function useAppColorMode() {
    const ctx = React.useContext(ColorModeContext);
    if (!ctx) {
        throw new Error("useAppColorMode must be used within AppShell");
    }
    return ctx;
}

export function AppShell({header, footer, children}: AppShellProps) {
    const [colorMode, setColorMode] = React.useState<ColorMode>("dark");

    const toggleColorMode = React.useCallback(() => {
        setColorMode((prev) => (prev === "light" ? "dark" : "light"));
    }, []);

    return (
        <ColorModeContext.Provider value={{colorMode, toggleColorMode}}>
            <ThemeProvider theme={theme} colorMode={colorMode}>
                <Flex as="div" direction="column" minHeight="100vh">
                    {header}
                    <View as="main" flex="1 0 auto">
                        {children}
                    </View>
                    {footer}
                </Flex>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
