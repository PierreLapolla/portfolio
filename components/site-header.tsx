import Link from "next/link"
import {ModeToggle} from "@/components/theme-toggle-button";
import {Button} from "@/components/ui/button";
import {ButtonGroup} from "@/components/ui/button-group";
import {Github, Linkedin} from "lucide-react";

export function SiteHeader() {
    return (
        <header className="border-b">
            <div className="mx-auto w-full max-w-5xl px-4 py-4 flex items-center justify-between">
                <Link href="/" className="font-semibold">
                    Portfolio
                </Link>

                <nav className="text-sm text-muted-foreground">
                    Header placeholder
                </nav>

                <ButtonGroup>
                <Button>
                    <Link
                        href="https://github.com/PierreLapolla"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github/>
                    </Link>
                </Button>
                <Button>
                    <Link
                        href="https://fr.linkedin.com/in/pierrelapolla"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin/>
                    </Link>
                </Button>
                <ModeToggle/>
                </ButtonGroup>
            </div>
        </header>
    )
}
