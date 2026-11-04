// components/sections/contact-section.tsx

import {Button} from "@/components/ui/button";
import {ButtonGroup} from "@/components/ui/button-group";
import {CopyToClipboardButton} from "@/components/buttons/copy-button";
import {useTranslations} from "next-intl";
import {ExternalLinkButton} from "@/components/buttons/external-link-button";
import {Section, SectionContent, SectionHeader} from "@/components/section";
import {LuMail} from "react-icons/lu";

export function ContactSection() {
    const t = useTranslations("contact");
    const email = t("email");

    return (
        <Section id="contact">
            <SectionHeader title={t("title")} description={t("blurb")}/>
            <SectionContent className="flex flex-wrap items-center gap-3 space-y-0">
                <ButtonGroup>
                    <Button asChild size="lg" className="px-4">
                        <a href={`mailto:${email}`}>
                            <LuMail aria-hidden data-icon="inline-start"/>
                            {email}
                        </a>
                    </Button>
                    <CopyToClipboardButton value={email} className="size-9"/>
                </ButtonGroup>
                <ExternalLinkButton href="https://github.com/PierreLapolla" variant="outline" size="lg" className="px-4" showText>
                    {t("github")}
                </ExternalLinkButton>
                <ExternalLinkButton href="https://fr.linkedin.com/in/pierrelapolla" variant="outline" size="lg" className="px-4" showText>
                    {t("linkedin")}
                </ExternalLinkButton>
            </SectionContent>
        </Section>
    );
}
