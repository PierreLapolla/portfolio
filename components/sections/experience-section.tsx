// components/sections/experience-section.tsx
import * as React from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Section} from "@/components/section";

type Item = {
    title: string;
    subtitle: string;
    bullets: string[];
};

const EXPERIENCE: Item[] = [
    {
        title: "Internship",
        subtitle: "Capgemini • 6 months",
        bullets: [
            "What you did (impact-first).",
            "What you built / improved.",
            "Tech used.",
        ],
    },
];

const EDUCATION: Item[] = [
    {
        title: "Degree / School",
        subtitle: "Field • Dates",
        bullets: ["Key focus: Data / AI.", "Notable coursework or achievements."],
    },
];

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
    return (
        <Section
            id="education"
            title="Education & Experience"
            description="The highlights. Use the assistant for the full story."
        >
            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                    <h3 className="text-sm font-medium text-muted-foreground">Experience</h3>
                    {EXPERIENCE.map((it) => (
                        <TimelineCard key={it.title} item={it}/>
                    ))}
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-medium text-muted-foreground">Education</h3>
                    {EDUCATION.map((it) => (
                        <TimelineCard key={it.title} item={it}/>
                    ))}
                </div>
            </div>
        </Section>
    );
}
