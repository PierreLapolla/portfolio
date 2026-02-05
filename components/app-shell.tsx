// app-shell.tsx

import type {ReactNode} from "react"
import {ThemeProvider} from "@/components/theme-provider"
import {SiteHeader} from "@/components/site-header"
import {SiteFooter} from "@/components/site-footer"

export function AppShell({children}: { children: ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            // disableTransitionOnChange
        >
            <div className="min-h-screen flex flex-col">
                <SiteHeader/>
                <main className="flex-1">{children}</main>
                <SiteFooter/>
            </div>
        </ThemeProvider>
    )
}
