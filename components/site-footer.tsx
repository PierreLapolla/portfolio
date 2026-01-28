// components/site-footer.tsx
import * as React from "react"
import {PageContainer} from "@/components/page-container"
import packageJson from "@/package.json"

export function SiteFooter() {
    return (
        <footer className="w-full border-t bg-background/70">
            <PageContainer className="py-4">
                <p className="text-xs sm:text-sm text-muted-foreground text-center whitespace-nowrap">
                    Made by Pierre Lapolla | v{packageJson.version}
                </p>
            </PageContainer>
        </footer>
    )
}
