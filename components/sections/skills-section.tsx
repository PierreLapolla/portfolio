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
    SiReact,
    SiCplusplus,
    SiTerraform,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {LuUsers} from "react-icons/lu";
import type {Props as CountryFlagProps} from "country-flag-icons/react/3x2";
import {FR, GB} from "country-flag-icons/react/3x2"
import type {IconType} from "react-icons";
import {useTranslations} from "next-intl";

type SkillIcon = React.ComponentType<CountryFlagProps> | IconType;

type Skill = {
    // rawName is used for icon color lookup (must remain English/brand name)
    rawName: string;
    name: string;
    Icon: SkillIcon;
    // optional extra small badges to show under the tile (labels or translation keys)
    badges?: string[];
    isBrand?: boolean;
};

type SkillGroupTemplate = {
    titleKey: string;
    items: Array<{ name: string; nameKey?: string; Icon: SkillIcon }>;
};

const SKILL_GROUPS: SkillGroupTemplate[] = [
    {
        titleKey: "groups.languages",
        items: [
            {name: "Python", nameKey: "items.python", Icon: SiPython},
            // Single C/C++ tile: rawName will be "C++" so we can pick up its brand color if available
            {name: "C++", nameKey: "items.c_cpp", Icon: SiCplusplus},
            {name: "Java", nameKey: "items.java", Icon: FaJava},
            {name: "TypeScript", nameKey: "items.typescript", Icon: SiTypescript},
        ],
    },
    {
        titleKey: "groups.soft",
        items: [
            {name: "French", nameKey: "items.french", Icon: FR},
            {name: "English", nameKey: "items.english", Icon: GB},
            // Single soft-skills tile containing several badges
            {name: "Interpersonal", nameKey: "items.soft_combined", Icon: LuUsers, /* badges assigned below */},
        ],
    },
    {
        titleKey: "groups.frameworks",
        items: [
            {name: "FastAPI", nameKey: "items.fastapi", Icon: SiFastapi},
            {name: "Next.js", nameKey: "items.nextjs", Icon: SiNextdotjs},
            {name: "React", nameKey: "items.react", Icon: SiReact},
            {name: "PyTorch", nameKey: "items.pytorch", Icon: SiPytorch},
            {name: "Polars", nameKey: "items.polars", Icon: SiPolars},
        ],
    },
    {
        titleKey: "groups.tools",
        items: [
            {name: "Amazon Web Services", nameKey: "items.aws", Icon: SiAmazonwebservices},
            {name: "Git", nameKey: "items.git", Icon: SiGit},
            {name: "Docker", nameKey: "items.docker", Icon: SiDocker},
            {name: "Terraform", nameKey: "items.terraform", Icon: SiTerraform},
            {name: "DevOps", nameKey: "items.devops", Icon: SiGit},
        ],
    },
];


function getSimpleIconColor(title: string): string | undefined {
    const icon = Object.values(simpleIcons).find(
        (i) => i.title.toLowerCase() === title.toLowerCase()
    );
    return icon ? `#${icon.hex}` : undefined;
}


// NOTE: removed the previous groupSoftItems helper as requested - badges are handled per-skill now.

function SkillTile({skill}: { skill: Skill }) {
    const {name, rawName, Icon, badges} = skill;
    const color = getSimpleIconColor(rawName);

    return (
        <div className="relative flex flex-col items-center gap-2 rounded-lg border bg-muted/30 px-3 py-3">
              <span style={color ? {color} : undefined}>
                <Icon className="h-12 w-12" aria-hidden/>
              </span>
            <div className="flex flex-col items-center gap-1">
                <div className="text-sm font-medium leading-none text-center">{name}</div>
                {badges && (
                    <div className="flex flex-wrap items-center gap-1 mt-1">
                        {badges.map((b, i) => (
                            <Badge key={`${skill.rawName}-badge-${i}`} variant="secondary" className="text-xs">
                                {b}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}


export function SkillsSection() {
    const t = useTranslations("skills");
    const groups = SKILL_GROUPS.map((group) => {
        const items = group.items.map((item) => {
            const displayName = item.nameKey ? t(item.nameKey) : item.name;

            // determine badges: for certain keys provide extra badges
            let badges: string[] | undefined;

            // C/C++ should not show extra badges (name is enough)
            // (user requested badges removed for C/C++)
            if (item.nameKey === "items.c_cpp") {
                badges = undefined;
            }

            // the interpersonal soft skills tile should show the 4 badges from translations
            if (item.nameKey === "items.soft_combined") {
                badges = [
                    t("items.teamwork"),
                    t("items.problemsolving"),
                    t("items.communication"),
                    t("items.leadership"),
                ];
            }

            // languages: add proficiency badges for French and English
            if (item.nameKey === "items.french") {
                badges = [t("items.french_level")];
            }
            if (item.nameKey === "items.english") {
                badges = [t("items.english_level")];
            }

            return {
                Icon: item.Icon,
                name: displayName,
                rawName: item.name,
                badges,
            } as Skill;
        });

        return { title: t(group.titleKey), items };
    });

    return (
        <Section
            id="skills"
            title={t("title")}
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
                                <SkillTile key={skill.rawName} skill={skill}/>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
