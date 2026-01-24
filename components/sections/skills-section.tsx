// components/sections/skills-section.tsx
import * as React from "react";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Section} from "@/components/section";

const SKILL_GROUPS: { title: string; items: string[] }[] = [
    {title: "Languages", items: ["TypeScript", "Python", "SQL"]},
    {title: "Frameworks", items: ["Next.js", "React"]},
    {title: "Data / AI", items: ["Pandas", "Sklearn", "Vector search", "Evaluation"]},
    {title: "Tools", items: ["Git", "Docker", "Kibana"]},
];

export function SkillsSection() {
    return (
        <Section
            id="skills"
            title="Skills"
            description="Grouped for fast scanning."
        >
            <div className="grid gap-4 sm:grid-cols-2">
                {SKILL_GROUPS.map((g) => (
                    <Card key={g.title}>
                        <CardHeader className="pb-3">
                            <CardTitle className="text-base">{g.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {g.items.map((s) => (
                                <Badge key={s} variant="secondary">
                                    {s}
                                </Badge>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
