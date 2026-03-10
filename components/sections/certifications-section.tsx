import Image from "next/image";
import {ExternalLinkButton} from "@/components/buttons/external-link-button";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {useLocale, useTranslations} from "next-intl";
import {Section, SectionContent, SectionHeader} from "@/components/section";

type Certification = {
    name: string;
    deliveredDate: string;
    image: string;
    credlyUrl?: string;
};

export function CertificationsSection() {
    const locale = useLocale();
    const t = useTranslations("certifications");
    const certifications = t.raw("items") as Certification[];
    const title = t("title");
    const description = t("description");

    const formatDate = (dateString: string) => {
        return new Intl.DateTimeFormat(locale, {
            year: "numeric",
            month: "long",
        }).format(new Date(dateString));
    };

    return (
        <Section id="certifications">
            <SectionHeader title={title} description={description} />
            <SectionContent>
                <Card>
                    <CardContent className="p-6 sm:p-8">
                        <div className="space-y-6">
                            {/* Certifications List */}
                            {certifications.map((cert) => (
                                <div key={cert.name} className="flex items-center gap-6 pb-6 last:pb-0 last:border-b-0 border-b">
                                    {/* Badge Image */}
                                    <div className="shrink-0">
                                        <div className="relative h-32 w-32 overflow-hidden rounded-lg">
                                            <Image
                                                src={`/${cert.image}`}
                                                alt={cert.name}
                                                fill
                                                sizes="128px"
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Certification Details */}
                                    <div className="flex flex-1 flex-col justify-center gap-2">
                                        <h3 className="font-semibold leading-tight">
                                            {cert.name}
                                        </h3>
                                        <div className="text-sm text-muted-foreground">
                                            {formatDate(cert.deliveredDate)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter className="border-t px-6 sm:px-8 py-4 bg-muted/30">
                        <ExternalLinkButton
                            href="https://www.credly.com/users/pierre-lapolla"
                            variant="outline"
                            className="w-full"
                            showText
                        >
                            {t("viewAll")}
                        </ExternalLinkButton>
                    </CardFooter>
                </Card>
            </SectionContent>
        </Section>
    );
}
