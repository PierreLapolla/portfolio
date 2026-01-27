// components/sections/contact-section.tsx
import * as React from "react";
import Link from "next/link";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ButtonGroup} from "@/components/ui/button-group";
import {Section} from "@/components/section";
import {CopyToClipboardButton} from "@/components/copy-button";
import {SiGithub, SiLinkedin} from "react-icons/si";
import {useTranslations} from "next-intl";

export function ContactSection() {
    const t = useTranslations("contact");

    return (
        <Section
            id="contact"
            title={t("title")}
            description=""
        >
            <Card>
                <CardContent className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                            {t("blurb")}
                        </p>
                    </div>

                    <ButtonGroup>
                        <Button asChild variant="outline">
                            <a href="mailto:pro@pierrelapolla.com">pro@pierrelapolla.com</a>
                        </Button>
                        <CopyToClipboardButton value={"pro@pierrelapolla.com"}/>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button asChild>
                            <Link
                                href="https://fr.linkedin.com/in/pierrelapolla"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiLinkedin className="h-4 w-4"/> {t("linkedin")}
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link
                                href="https://github.com/PierreLapolla"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiGithub className="h-4 w-4"/> {t("github")}
                            </Link>
                        </Button>
                    </ButtonGroup>
                </CardContent>
            </Card>
        </Section>
    );
}
