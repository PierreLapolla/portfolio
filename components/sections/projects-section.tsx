// components/sections/projects-section.tsx
import * as React from "react";
import Link from "next/link";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Section} from "@/components/section";

type Project = {
    title: string;
    description: string;
    tags: string[];
    href?: string;
};

const PROJECTS: Project[] = [
    {
        title: "Project title A",
        description: "One-liner describing impact and what you built.",
        tags: ["Next.js", "TypeScript", "AI"],
        href: "#",
    },
    {
        title: "Project title B",
        description: "One-liner describing impact and what you built.",
        tags: ["Python", "Data", "ML"],
    },
    {
        title: "Project title C",
        description: "One-liner describing impact and what you built.",
        tags: ["Kibana", "Elastic", "Dashboards"],
    },
];

export function ProjectsSection() {
    return (
        <Section
            id="projects"
            title="Projects"
            description="A few selected projects. Keep it scannable."
        >
            <div className="grid gap-4 sm:grid-cols-2">
                {PROJECTS.map((p) => (
                    <Card key={p.title} className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-base">{p.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">{p.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                    <Badge key={t} variant="secondary">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="mt-auto">
                            {p.href ? (
                                <Button variant="outline" size="sm">
                                    <Link href={p.href}>View</Link>
                                </Button>
                            ) : (
                                <Button variant="outline" size="sm" disabled>
                                    Link soon
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
