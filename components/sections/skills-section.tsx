// components/sections/skills-section.tsx
import * as React from "react";
import {
    SiAmazonwebservices,
    SiCplusplus,
    SiDocker,
    SiFastapi,
    SiGit,
    SiGithubactions,
    SiNextdotjs,
    SiPolars,
    SiPython,
    SiPytorch,
    SiReact,
    SiTerraform,
    SiTypescript,
} from "react-icons/si";
import {FaJava} from "react-icons/fa";
import {LuUsers} from "react-icons/lu";
import type {Props as CountryFlagProps} from "country-flag-icons/react/3x2";
import {FR, GB} from "country-flag-icons/react/3x2";
import type {IconType} from "react-icons";
import {useTranslations} from "next-intl";
import {Section, SectionContent, SectionHeader} from "@/components/section";

type SkillIcon = React.ComponentType<CountryFlagProps> | IconType;

type SkillTemplate = {
    nameKey: string;
    Icon: SkillIcon;
    // translation keys rendered as small qualifiers next to the name
    detailKeys?: string[];
    // flags keep their own colors; brand marks render monochrome
    isFlag?: boolean;
};

const SKILL_GROUPS: Array<{ titleKey: string; items: SkillTemplate[] }> = [
    {
        titleKey: "groups.languages",
        items: [
            {nameKey: "items.python", Icon: SiPython},
            {nameKey: "items.c_cpp", Icon: SiCplusplus},
            {nameKey: "items.java", Icon: FaJava},
            {nameKey: "items.typescript", Icon: SiTypescript},
        ],
    },
    {
        titleKey: "groups.frameworks",
        items: [
            {nameKey: "items.fastapi", Icon: SiFastapi},
            {nameKey: "items.nextjs", Icon: SiNextdotjs},
            {nameKey: "items.react", Icon: SiReact},
            {nameKey: "items.pytorch", Icon: SiPytorch},
            {nameKey: "items.polars", Icon: SiPolars},
        ],
    },
    {
        titleKey: "groups.tools",
        items: [
            {nameKey: "items.aws", Icon: SiAmazonwebservices},
            {nameKey: "items.git", Icon: SiGit},
            {nameKey: "items.docker", Icon: SiDocker},
            {nameKey: "items.terraform", Icon: SiTerraform},
            {nameKey: "items.devops", Icon: SiGithubactions},
        ],
    },
    {
        titleKey: "groups.soft",
        items: [
            {nameKey: "items.french", Icon: FR, isFlag: true, detailKeys: ["items.french_level"]},
            {nameKey: "items.english", Icon: GB, isFlag: true, detailKeys: ["items.english_level"]},
            {
                nameKey: "items.soft_combined",
                Icon: LuUsers,
                detailKeys: ["items.teamwork", "items.problemsolving", "items.communication", "items.leadership"],
            },
        ],
    },
];

export function SkillsSection() {
    const t = useTranslations("skills");

    return (
        <Section id="skills">
            <SectionHeader title={t("title")} description={t("description")}/>
            <SectionContent className="grid gap-x-10 gap-y-12 space-y-0 sm:grid-cols-2">
                {SKILL_GROUPS.map((group) => (
                    <div key={group.titleKey}>
                        <h3 className="border-b pb-3 text-sm font-medium text-muted-foreground">
                            {t(group.titleKey)}
                        </h3>
                        <ul className="divide-y">
                            {group.items.map(({nameKey, Icon, detailKeys, isFlag}) => (
                                <li key={nameKey} className="flex items-start gap-3 py-3">
                                    <Icon
                                        aria-hidden
                                        className={isFlag
                                            ? "mt-0.5 h-3.5 w-5 shrink-0 rounded-[2px]"
                                            : "mt-0.5 size-5 shrink-0 text-foreground/70"}
                                    />
                                    <div className="min-w-0">
                                        <span className="font-medium">{t(nameKey)}</span>
                                        {detailKeys ? (
                                            <p className="mt-0.5 text-sm text-muted-foreground">
                                                {detailKeys.map((k) => t(k)).join(" · ")}
                                            </p>
                                        ) : null}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </SectionContent>
        </Section>
    );
}
