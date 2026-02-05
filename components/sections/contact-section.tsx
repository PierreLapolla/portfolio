// components/sections/contact-section.tsx

import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ButtonGroup} from "@/components/ui/button-group";
import {CopyToClipboardButton} from "@/components/copy-button";
import {useTranslations} from "next-intl";
import {ExternalLinkButton} from "@/components/external-link-button";
import {Section, SectionContent, SectionHeader} from "@/components/section";

export function ContactSection() {
    const t = useTranslations("contact");
    const title = t("title");

    return (
        <Section id="contact">
            <SectionHeader title={title} />
            <SectionContent>
                <Card>
                    <CardContent className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">
                                {t("blurb")}
                            </p>
                        </div>

                        <ButtonGroup>
                            <Button asChild variant="outline">
                                <a href={`mailto:${t("email")}`}>{t("email")}</a>
                            </Button>
                            <CopyToClipboardButton value={t("email")}/>
                        </ButtonGroup>
                        <ButtonGroup>
                            <ExternalLinkButton
                                href="https://fr.linkedin.com/in/pierrelapolla"
                                showText
                            >
                                {t("linkedin")}
                            </ExternalLinkButton>
                            <ExternalLinkButton
                                href="https://github.com/PierreLapolla"
                                showText
                            >
                                {t("github")}
                            </ExternalLinkButton>
                        </ButtonGroup>
                    </CardContent>
                </Card>
            </SectionContent>
        </Section>
    );
}
