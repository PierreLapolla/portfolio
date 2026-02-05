// components/sections/projects-section.tsx
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ExternalLinkButton} from "@/components/external-link-button";
import {useTranslations} from "next-intl";
import {Section, SectionContent, SectionHeader} from "@/components/section";

type Project = {
    title: string;
    description: string;
    tags: string[];
    href?: string;
};

export function ProjectsSection() {
    const t = useTranslations("projects");
    const projects = t.raw("items") as Project[];
    const title = t("title");
    const description = t("description");

    return (
        <Section id="projects">
            <SectionHeader title={title} description={description} />
            <SectionContent>
                <div className="grid gap-4 sm:grid-cols-2">
                    {projects.map((p) => (
                        <Card key={p.title} className="flex flex-col">
                            <CardHeader className="flex flex-row items-start justify-between">
                                <CardTitle className="text-base">{p.title}</CardTitle>
                                {p.href ? (
                                    <ExternalLinkButton
                                        href={p.href}
                                        variant="outline"
                                    />
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
            </SectionContent>
        </Section>
    );
}
