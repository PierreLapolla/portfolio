// components/site-footer.tsx
import packageJson from "@/package.json"
import {useTranslations} from "next-intl"

export function SiteFooter() {
    const t = useTranslations("footer")
    return (
        <footer className="w-full border-t bg-background/70">
            <div className="page-container py-4">
                <p className="text-xs sm:text-sm text-muted-foreground text-center whitespace-nowrap">
                    {t("madeBy", { version: packageJson.version })}
                </p>
            </div>
        </footer>
    )
}
