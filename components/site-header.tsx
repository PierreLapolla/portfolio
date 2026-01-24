// components/site-header.tsx
import Link from "next/link";
import { ModeToggle } from "@/components/theme-toggle-button";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/page-container";
import { Github, Linkedin } from "lucide-react";

const NAV = [
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#chat", label: "Chat" },
    { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
    return (
        <header className="border-b">
            <PageContainer className="py-4 flex items-center justify-between gap-4">
                <Link href="#top" className="font-semibold">
                    Pierre Lapolla
                </Link>

                <nav className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
                    {NAV.map((item) => (
                        <Link key={item.href} href={item.href} className="hover:text-foreground transition-colors">
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" asChild>
                        <Link href="https://github.com/PierreLapolla" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <Link href="https://fr.linkedin.com/in/pierrelapolla" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="h-4 w-4" />
                        </Link>
                    </Button>
                    <ModeToggle />
                </div>
            </PageContainer>
        </header>
    );
}
