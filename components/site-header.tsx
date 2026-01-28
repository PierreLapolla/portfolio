// components/site-header.tsx
import Link from "next/link";
import {useTranslations} from "next-intl";
import {Link as IntlLink} from "@/i18n/navigation";
import {ThemeToggleButton} from "@/components/theme-toggle-button";
import {Button} from "@/components/ui/button";
import {ButtonGroup} from "@/components/ui/button-group";
import {PageContainer} from "@/components/page-container";
import {SiGithub, SiLinkedin} from "react-icons/si";
import {LanguageToggleButton} from "@/components/language-toggle-button";

const NAV = [
    {href: "#projects", labelKey: "projects"},
    {href: "#education", labelKey: "education"},
    {href: "#skills", labelKey: "skills"},
    {href: "#chat", labelKey: "chat"},
    {href: "#contact", labelKey: "contact"},
];

export function SiteHeader() {
    const t = useTranslations("nav");

    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-backdrop-filter:bg-background/60">
            <PageContainer className="py-3 flex items-center justify-between gap-4">
                <IntlLink href="/" className="font-semibold">
                    Pierre Lapolla
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
                        <Button
                            asChild
                            variant="outline"
                            size="icon"
                        >
                            <Link
                                href="https://github.com/PierreLapolla"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <SiGithub className="h-4 w-4"/>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="icon"
                        >
                            <Link
                                href="https://fr.linkedin.com/in/pierrelapolla"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <SiLinkedin className="h-4 w-4"/>
                            </Link>
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <LanguageToggleButton/>
                        <ThemeToggleButton/>
                    </ButtonGroup>
                </ButtonGroup>
            </PageContainer>
        </header>
    );
}
