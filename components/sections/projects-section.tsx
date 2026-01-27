// components/sections/projects-section.tsx
import * as React from "react";
import Link from "next/link";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {LuExternalLink} from "react-icons/lu";
import {SiGithub} from "react-icons/si";
import {Section} from "@/components/section";
import {useTranslations} from "next-intl";

type Project = {
    title: string;
    description: string;
    tags: string[];
    href?: string;
};

export function ProjectsSection() {
    const t = useTranslations("projects");
    const projects = t.raw("items") as Project[];

    return (
        <Section
            id="projects"
            title={t("title")}
            description={t("description")}
        >
            <div className="grid gap-4 sm:grid-cols-2">
                {projects.map((p) => (
                    <Card key={p.title} className="flex flex-col">
                        <CardHeader className="flex flex-row items-start justify-between">
                            <CardTitle className="text-base">{p.title}</CardTitle>
                            {p.href ? (
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                >
                                    <Link
                                        href={p.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="gap-2"
                                    >
                                        {p.href.includes("github.com") ? (
                                            <SiGithub className="h-4 w-4"/>
                                        ) : (
                                            <LuExternalLink className="h-4 w-4"/>
                                        )}
                                    </Link>
                                </Button>
                            ) : null}
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">{p.description}</p>
                            <div className="flex flex-wrap items-center gap-2">
                                {p.tags.map((t) => (
                                    <Badge key={t} variant="secondary">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
