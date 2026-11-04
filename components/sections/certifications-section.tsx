import Image from "next/image";
import {LuArrowUpRight} from "react-icons/lu";
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

    const formatDate = (dateString: string) =>
        new Intl.DateTimeFormat(locale, {year: "numeric", month: "long"}).format(new Date(dateString));

    return (
        <Section id="certifications">
            <SectionHeader title={t("title")} description={t("description")}/>
            <SectionContent>
                <ul className="divide-y rounded-xl border bg-card">
                    {certifications.map((cert) => (
                        <li key={cert.name} className="flex items-center gap-5 p-5 sm:gap-6 sm:p-6">
                            <div className="relative size-16 shrink-0 sm:size-20">
                                <Image
                                    src={`/${cert.image}`}
                                    alt=""
                                    fill
                                    sizes="80px"
                                    className="object-contain"
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="font-semibold leading-snug">{cert.name}</h3>
                                <p className="mt-1 text-sm text-muted-foreground tabular-nums">
                                    {formatDate(cert.deliveredDate)}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
                <a
                    href="https://www.credly.com/users/pierre-lapolla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-foreground link-underline"
                >
                    {t("viewAll")}
                    <LuArrowUpRight aria-hidden className="size-4"/>
                </a>
            </SectionContent>
        </Section>
    );
}
