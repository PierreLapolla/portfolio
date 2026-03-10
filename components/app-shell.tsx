// app-shell.tsx
import React, {ReactNode} from "react"
import {SiteHeader} from "@/components/site-header"
import {SiteFooter} from "@/components/site-footer"

import {ThemeProvider as NextThemesProvider} from "next-themes"
import {Analytics} from "@vercel/analytics/next"
import {useTranslations} from "next-intl";

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>

function ThemeProvider({children, ...props}: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function AppShell({children}: { children: ReactNode }) {
    const t = useTranslations("a11y");

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            // disableTransitionOnChange
        >
            <div className="min-h-screen flex flex-col">
                <a href="#main-content" className="skip-link">
                    {t("skipToMain")}
                </a>
                <SiteHeader/>
                <main id="main-content" className="flex-1">{children}</main>
                <SiteFooter/>
            </div>
            <Analytics/>
        </ThemeProvider>
    )
}
