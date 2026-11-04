// components/site-footer.tsx
import packageJson from "@/package.json"
import {useTranslations} from "next-intl"
import {ExternalLinkButton} from "@/components/buttons/external-link-button"

export function SiteFooter() {
    const t = useTranslations("footer")
    return (
        <footer className="w-full border-t">
            <div className="page-container flex items-center justify-between gap-4 py-6">
                <p className="text-sm text-muted-foreground tabular-nums">
                    {t("madeBy", {version: packageJson.version})}
                </p>
                <div className="flex items-center gap-1">
                    <ExternalLinkButton href="https://github.com/PierreLapolla" variant="ghost" size="icon"/>
                    <ExternalLinkButton href="https://fr.linkedin.com/in/pierrelapolla" variant="ghost" size="icon"/>
                </div>
            </div>
        </footer>
    )
}
