// components/sections/skills-section.tsx
import * as React from "react";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
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
import {useTranslations} from "next-intl";
import {LuExternalLink, LuBadgeCheck} from "react-icons/lu";

type SkillIcon = React.ComponentType<CountryFlagProps> | IconType;

type Skill = {
    name: string;
    Icon: SkillIcon;
    isBrand?: boolean;
};

type SkillGroupTemplate = {
    titleKey: string;
    items: Array<Skill & {nameKey?: string}>;
};

const SKILL_GROUPS: SkillGroupTemplate[] = [
    {
        titleKey: "groups.languages",
        items: [
            {name: "Python", Icon: SiPython},
            {name: "TypeScript", Icon: SiTypescript},
        ],
    },
    {
        titleKey: "groups.frameworks",
        items: [
            {name: "FastAPI", Icon: SiFastapi},
            {name: "Next.js", Icon: SiNextdotjs},
            {name: "Pytorch", Icon: SiPytorch},
            {name: "Polars", Icon: SiPolars},
        ],
    },
    {
        titleKey: "groups.tools",
        items: [
            {name: "Amazon Web Services", Icon: SiAmazonwebservices},
            {name: "Git", Icon: SiGit},
            {name: "Docker", Icon: SiDocker},
        ],
    },
    {
        titleKey: "groups.soft",
        items: [
            {name: "French", nameKey: "items.french", Icon: FR},
            {name: "English", nameKey: "items.english", Icon: GB},
            {name: "Team work", nameKey: "items.teamwork", Icon: LuUsers},
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
    const t = useTranslations("skills");
    const tCertifications = useTranslations("certifications");
    const groups = SKILL_GROUPS.map((group) => ({
        title: t(group.titleKey),
        items: group.items.map((item) => {
            const {nameKey, ...rest} = item;
            return {
                ...rest,
                name: nameKey ? t(nameKey) : item.name,
            };
        }),
    }));

    return (
        <Section
            id="skills"
            title={"TODO " + t("title")}
            description={t("description")}
        >
            <div className="grid gap-4 sm:grid-cols-2">
                {groups.map((g) => (
                    <Card
                        key={g.title}
                        className="bg-background border"
                    >
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
                <Card id="certifications" className="sm:col-span-2">
                    <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                            <LuBadgeCheck className="size-4"/>
                            <CardTitle className="text-base">{tCertifications("title")}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-muted-foreground">
                            {tCertifications("blurb")}
                        </p>
                        <Button asChild variant="outline">
                            <Link
                                href="https://www.credly.com/users/pierre-lapolla"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2"
                            >
                                {tCertifications("button")}
                                <LuExternalLink className="h-4 w-4"/>
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </Section>
    );
}
