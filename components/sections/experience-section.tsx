// components/sections/experience-section.tsx
import {LuArrowUpRight} from "react-icons/lu";
import {useTranslations} from "next-intl";
import {Section, SectionContent, SectionHeader} from "@/components/section";

type ExperienceItem = {
    title: string;
    location: string;
    href?: string;
};

function Timeline({heading, items}: { heading: string; items: ExperienceItem[] }) {
    return (
        <div>
            <h3 className="text-sm font-medium text-muted-foreground">{heading}</h3>
            <ol className="mt-5 border-l">
                {items.map((item) => (
                    <li key={item.title} className="relative pb-7 pl-6 last:pb-0">
                        <span
                            aria-hidden
                            className="absolute -left-[5px] top-1.5 size-[9px] rounded-full border-2 border-primary bg-background"
                        />
                        <p className="font-semibold leading-snug">{item.title}</p>
                        {item.href ? (
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {item.location}
                                <LuArrowUpRight aria-hidden className="size-3.5"/>
                            </a>
                        ) : (
                            <p className="mt-1 text-sm text-muted-foreground">{item.location}</p>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export function ExperienceSection() {
    const t = useTranslations("experience");

    return (
        <Section id="education">
            <SectionHeader title={t("title")} description={t("description")}/>
            <SectionContent className="grid gap-12 space-y-0 md:grid-cols-2">
                <Timeline heading={t("experienceHeading")} items={t.raw("experienceItems") as ExperienceItem[]}/>
                <Timeline heading={t("educationHeading")} items={t.raw("educationItems") as ExperienceItem[]}/>
            </SectionContent>
        </Section>
    );
}
