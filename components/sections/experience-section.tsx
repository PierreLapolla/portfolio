// components/sections/experience-section.tsx
import * as React from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Section} from "@/components/section";
import {useTranslations} from "next-intl";

type Item = {
    title: string;
    subtitle: string;
    bullets: string[];
};

function TimelineCard({item}: { item: Item }) {
    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="text-base">{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {item.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}

export function ExperienceSection() {
    const t = useTranslations("experience");
    const experienceItems = t.raw("experienceItems") as Item[];
    const educationItems = t.raw("educationItems") as Item[];

    return (
        <Section
            id="education"
            title={"TODO " + t("title")}
            description={""}
        >
            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                    <h3 className="text-sm font-medium text-muted-foreground">{t("experienceHeading")}</h3>
                    {experienceItems.map((it) => (
                        <TimelineCard key={it.title} item={it}/>
                    ))}
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-medium text-muted-foreground">{t("educationHeading")}</h3>
                    {educationItems.map((it) => (
                        <TimelineCard key={it.title} item={it}/>
                    ))}
                </div>
            </div>
        </Section>
    );
}
