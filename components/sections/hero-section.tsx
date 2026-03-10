// components/sections/hero-section.tsx
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {useTranslations} from "next-intl";
import {Section, SectionContent} from "@/components/section";

export function HeroSection() {
    const t = useTranslations("hero");

    return (
        <Section id="top" className="pt-10 sm:pt-14">
            <SectionContent>
                <Card>
                    <CardContent className="p-6 sm:p-8">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">{t("badgeRole")}</Badge>
                                <Badge variant="secondary">{t("badgeFocus")}</Badge>
                            </div>

                            <div className="space-y-2">
                                <h1 className="text-balance text-2xl sm:text-4xl font-semibold tracking-tight">
                                    {t("title")}
                                </h1>
                                <p className="text-sm sm:text-base text-muted-foreground">
                                    {t("description")}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <Button asChild>
                                    <Link href="#chat">{t("ctaAssistant")}</Link>
                                </Button>
                                <Button asChild variant="outline">
                                    <Link href="#contact">{t("ctaContact")}</Link>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </SectionContent>
        </Section>
    );
}
