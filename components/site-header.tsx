// components/site-header.tsx
import Link from "next/link";
import {useTranslations} from "next-intl";
import {Link as IntlLink} from "@/i18n/navigation";
import {ThemeToggleButton} from "@/components/buttons/theme-toggle-button";
import {ButtonGroup} from "@/components/ui/button-group";
import {LanguageToggleButton} from "@/components/buttons/language-toggle-button";
import {ExternalLinkButton} from "@/components/buttons/external-link-button";

const NAV = [
    {href: "#projects", labelKey: "projects"},
    {href: "#education", labelKey: "education"},
    {href: "#skills", labelKey: "skills"},
    {href: "#chat", labelKey: "chat"},
    {href: "#contact", labelKey: "contact"},
];

export function SiteHeader() {
    const t = useTranslations("nav");
    const ts = useTranslations("site");

    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="page-container py-3 flex items-center justify-between gap-4">
                <IntlLink href="/" className="font-semibold">
                    {ts("title")}
                </IntlLink>

                <nav className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
                    {NAV.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:text-foreground transition-colors"
                        >
                            {t(item.labelKey)}
                        </Link>
                    ))}
                </nav>

                <ButtonGroup>
                    <ButtonGroup>
                        <ExternalLinkButton
                            href={"https://github.com/PierreLapolla"}
                            variant="outline"
                        />
                        <ExternalLinkButton
                            href={"https://fr.linkedin.com/in/pierrelapolla"}
                            variant="outline"
                        />
                    </ButtonGroup>
                    <ButtonGroup>
                        <LanguageToggleButton/>
                        <ThemeToggleButton/>
                    </ButtonGroup>
                </ButtonGroup>
            </div>
        </header>
    );
}
