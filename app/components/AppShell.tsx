"use client";

import React, {ReactNode} from "react";
import {ColorMode, Flex, ThemeProvider, View} from "@aws-amplify/ui-react";
import {appTheme} from "@/app/styles/theme";

type AppShellProps = {
    header: ReactNode;
    footer: ReactNode;
    children: ReactNode;
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
            <ThemeProvider theme={appTheme} colorMode={colorMode}>
                <Flex as="div" direction="column" minHeight="100vh">
                    {header}
                    <View as="div" flex="1 0 auto">
                        {children}
                    </View>
                    {footer}
                </Flex>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
