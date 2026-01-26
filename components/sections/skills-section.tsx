// components/sections/skills-section.tsx
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/section";

import {
    SiTypescript,
    SiPython,
    SiPostgresql,
    SiReact,
    SiNextdotjs,
    SiPandas,
    SiScikitlearn,
    SiGit,
    SiDocker,
    SiKibana,
    SiAmazonwebservices,
} from "react-icons/si";

import { LuSearch, LuChartBar } from "react-icons/lu";

type Skill = {
    name: string;
    Icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

const SKILL_GROUPS: { title: string; items: Skill[] }[] = [
    {
        title: "Languages",
        items: [
            { name: "TypeScript", Icon: SiTypescript },
            { name: "Python", Icon: SiPython}, // example
            { name: "SQL", Icon: SiPostgresql },
        ],
    },
    {
        title: "Frameworks",
        items: [
            { name: "Next.js", Icon: SiNextdotjs },
            { name: "React", Icon: SiReact },
        ],
    },
    {
        title: "Data / AI",
        items: [
            { name: "Pandas", Icon: SiPandas },
            { name: "Sklearn", Icon: SiScikitlearn },
            { name: "Vector search", Icon: LuSearch },
            { name: "Evaluation", Icon: LuChartBar },
        ],
    },
    {
        title: "Tools",
        items: [
            { name: "AWS", Icon: SiAmazonwebservices},
            { name: "Git", Icon: SiGit },
            { name: "Docker", Icon: SiDocker },
            { name: "Kibana", Icon: SiKibana },
        ],
    },
];

function SkillTile({ skill }: { skill: Skill }) {
    const { name, Icon } = skill;
    return (
        <div className="relative flex flex-col items-center gap-1 rounded-lg border bg-muted/30 px-3 py-3">
            <Icon className="h-12 w-12" aria-hidden />
            <Badge variant="secondary" className="text-sm font-medium leading-none text-center">{name}</Badge>
        </div>
    );
}

export function SkillsSection() {
    return (
        <Section id="skills" title="Skills" description="Grouped for fast scanning.">
            <div className="grid gap-4 sm:grid-cols-2">
                {SKILL_GROUPS.map((g) => (
                    <Card key={g.title}>
                        <CardHeader className="pb-3">
                            <CardTitle className="text-base">{g.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-2">
                            {g.items.map((skill) => (
                                <SkillTile key={skill.name} skill={skill} />
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
