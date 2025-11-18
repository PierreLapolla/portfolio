"use client";

import {ReactNode} from "react";
import {ThemeProvider} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export function AmplifyUIProvider({children}: { children: ReactNode }) {
    return (
        <ThemeProvider colorMode="system">
            {children}
        </ThemeProvider>
    );
}
