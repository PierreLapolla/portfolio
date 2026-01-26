// components/site-header.tsx
import Link from "next/link";
import {ThemeToggleButton} from "@/components/theme-toggle-button";
import {Button} from "@/components/ui/button";
import {ButtonGroup} from "@/components/ui/button-group";
import {PageContainer} from "@/components/page-container";
import {Github, Linkedin} from "lucide-react";

const NAV = [
    {href: "#projects", label: "Projects"},
    {href: "#education", label: "Education"},
    {href: "#skills", label: "Skills"},
    {href: "#chat", label: "Chat"},
    {href: "#contact", label: "Contact"},
];

export function SiteHeader() {
    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-backdrop-filter:bg-background/60">
            <PageContainer className="py-3 flex items-center justify-between gap-4">
                <Link href="/" className="font-semibold">
                    Pierre Lapolla
                </Link>

                <nav className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
                    {NAV.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:text-foreground transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <ButtonGroup className="flex items-center">
                    <Button
                        asChild
                        variant="default"
                        size="icon"
                    >
                        <Link
                            href="https://github.com/PierreLapolla"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <Github className="h-4 w-4"/>
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="default"
                        size="icon"
                    >
                        <Link
                            href="https://fr.linkedin.com/in/pierrelapolla"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-4 w-4"/>
                        </Link>
                    </Button>

                    <ThemeToggleButton/>
                </ButtonGroup>
            </PageContainer>
        </header>
    );
}
