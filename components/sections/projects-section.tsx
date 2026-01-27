// components/sections/projects-section.tsx
import * as React from "react";
import Link from "next/link";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {LuExternalLink} from "react-icons/lu";
import {SiGithub} from "react-icons/si";
import {Section} from "@/components/section";

type Project = {
    title: string;
    description: string;
    tags: string[];
    href?: string;
};

const PROJECTS: Project[] = [
    {
        title: "Personal portfolio website",
        description: "The website I built for me, myself and I (and maybe recruiters).",
        tags: ["Next.js", "TypeScript", "DevOps"],
        href: "https://github.com/PierreLapolla/portfolio"
    },
    {
        title: "Pedros",
        description: "A small utility package for Python, mostly for my personal projects.",
        tags: ["Python", "DevOps"],
        href: "https://github.com/PierreLapolla/pedros"
    },
    {
        title: "ARECE",
        description: "The first french formula student student team in the autonomous class. I was a member of the trajectory team where we developed a neural network that can predict the optimal trajectory for the car.",
        tags: ["Python", "Data", "AI"],
        href: "https://fr.linkedin.com/company/autonomous-racing-ece"
    },
];

export function ProjectsSection() {
    return (
        <Section
            id="projects"
            title="Projects"
            description="A few selected projects, visit my GitHub for more."
        >
            <div className="grid gap-4 sm:grid-cols-2">
                {PROJECTS.map((p) => (
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
