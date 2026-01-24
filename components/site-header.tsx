import Link from "next/link"
import {ThemeTogglerButton} from "@/components/animate-ui/components/buttons/theme-toggler";

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

                <ThemeTogglerButton modes={["light", "dark"]} />
            </div>
        </header>
    )
}
