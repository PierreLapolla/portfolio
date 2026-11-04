// components/sections/hero-section.tsx
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";
import {Section} from "@/components/section";
import {ExternalLinkButton} from "@/components/buttons/external-link-button";
import {LuArrowRight} from "react-icons/lu";

export function HeroSection() {
    const t = useTranslations("hero");

    return (
        <Section id="top" className="hero-wash pt-20 pb-4 sm:pt-32">
            <div className="max-w-3xl">
                <p className="text-sm font-medium text-primary">{t("role")}</p>
                <h1 className="mt-4 text-5xl sm:text-7xl font-semibold tracking-tighter">
                    {t("title")}
                </h1>
                <p className="mt-6 max-w-[62ch] text-lg text-muted-foreground text-pretty">
                    {t("description")}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                    <Button asChild size="lg" className="px-4">
                        <Link href="#chat">
                            {t("ctaAssistant")}
                            <LuArrowRight aria-hidden data-icon="inline-end"/>
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="px-4">
                        <Link href="#contact">{t("ctaContact")}</Link>
                    </Button>
                    <div className="flex items-center gap-1 sm:ml-2">
                        <ExternalLinkButton href="https://github.com/PierreLapolla" variant="ghost" size="icon-lg"/>
                        <ExternalLinkButton href="https://fr.linkedin.com/in/pierrelapolla" variant="ghost" size="icon-lg"/>
                    </div>
                </div>
            </div>
        </Section>
    );
}
