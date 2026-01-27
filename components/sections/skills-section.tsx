// components/sections/skills-section.tsx
import * as React from "react";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Section} from "@/components/section";
import * as simpleIcons from "simple-icons";
import {
    SiAmazonwebservices,
    SiDocker,
    SiFastapi,
    SiGit,
    SiNextdotjs,
    SiPolars,
    SiPython,
    SiPytorch,
    SiTypescript,
} from "react-icons/si";
import {LuUsers} from "react-icons/lu";
import type {Props as CountryFlagProps} from "country-flag-icons/react/3x2";
import {FR, GB} from "country-flag-icons/react/3x2"
import type {IconType} from "react-icons";

type SkillIcon = React.ComponentType<CountryFlagProps> | IconType;

type Skill = {
    name: string;
    Icon: SkillIcon;
    isBrand?: boolean;
};

const SKILL_GROUPS: { title: string; items: Skill[] }[] = [
    {
        title: "Languages",
        items: [
            {name: "Python", Icon: SiPython},
            {name: "TypeScript", Icon: SiTypescript},
        ],
    },
    {
        title: "Frameworks / Libraries",
        items: [
            {name: "FastAPI", Icon: SiFastapi},
            {name: "Next.js", Icon: SiNextdotjs},
            {name: "Pytorch", Icon: SiPytorch},
            {name: "Polars", Icon: SiPolars},
        ],
    },
    {
        title: "Tools",
        items: [
            {name: "Amazon Web Services", Icon: SiAmazonwebservices},
            {name: "Git", Icon: SiGit},
            {name: "Docker", Icon: SiDocker},
        ],
    },
    {
        title: "Softskills",
        items: [
            {name: "French", Icon: FR},
            {name: "English", Icon: GB},
            {name: "Team work", Icon: LuUsers},
        ],
    },
];


function getSimpleIconColor(title: string): string | undefined {
    const icon = Object.values(simpleIcons).find(
        (i) => i.title.toLowerCase() === title.toLowerCase()
    );
    return icon ? `#${icon.hex}` : undefined;
}


function SkillTile({skill}: { skill: Skill }) {
    const {name, Icon} = skill;
    const color = getSimpleIconColor(name);

    return (
        <div className="relative flex flex-col items-center gap-1 rounded-lg border bg-muted/30 px-3 py-3">
              <span style={color ? {color} : undefined}>
                <Icon className="h-12 w-12" aria-hidden/>
              </span>
            <Badge variant="secondary" className="text-sm font-medium leading-none text-center">
                {name}
            </Badge>
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
                                <SkillTile key={skill.name} skill={skill}/>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
