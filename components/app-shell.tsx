// app-shell.tsx

import * as React from "react"
import {ThemeProvider} from "@/components/theme-provider"
import {SiteHeader} from "@/components/site-header"

export function AppShell({children}: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            // disableTransitionOnChange
        >
            <div className="min-h-screen flex flex-col">
                <SiteHeader/>
                <main className="flex-1">{children}</main>
            </div>
        </ThemeProvider>
    )
}
