// components/sections/experience-section.tsx
import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {ExternalLinkButton} from "@/components/buttons/external-link-button";
import {useTranslations} from "next-intl";
import {Section, SectionContent, SectionHeader} from "@/components/section";

type ExperienceItem = {
    title: string;
    location: string;
    href?: string;
};

export function ExperienceSection() {
    const t = useTranslations("experience");
    const experienceItems = t.raw("experienceItems") as ExperienceItem[];
    const educationItems = t.raw("educationItems") as ExperienceItem[];
    const title = t("title");
    const description = t("description");

    const renderItemCard = (item: ExperienceItem) => (
        <Card key={item.title} className="flex flex-col">
            <CardHeader className="flex flex-row items-start justify-between">
                <div className="flex-1">
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{item.location}</p>
                </div>
                {item.href ? (
                    <ExternalLinkButton
                        href={item.href}
                        variant="outline"
                    />
                ) : null}
            </CardHeader>
        </Card>
    );

    return (
        <Section id="education">
            <SectionHeader title={title} description={description} />
            <SectionContent>
                {/* Experience Section */}
                <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">{t("experienceHeading")}</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {experienceItems.map(renderItemCard)}
                    </div>
                </div>

                {/* Education Section */}
                <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">{t("educationHeading")}</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {educationItems.map(renderItemCard)}
                    </div>
                </div>
            </SectionContent>
        </Section>
    );
}
