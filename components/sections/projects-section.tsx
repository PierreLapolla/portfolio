// components/sections/projects-section.tsx
import {LuArrowUpRight} from "react-icons/lu";
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

    return (
        <Section id="projects">
            <SectionHeader title={t("title")} description={t("description")}/>
            <SectionContent>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => (
                        <li
                            key={p.title}
                            className="group relative flex flex-col rounded-xl border bg-card p-6 transition-colors hover:border-primary/50 has-focus-visible:border-primary"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="text-base font-semibold leading-snug">
                                    {p.href ? (
                                        // Stretched link: the whole card is clickable, one tab stop.
                                        <a
                                            href={p.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="outline-none after:absolute after:inset-0 after:rounded-xl"
                                        >
                                            {p.title}
                                        </a>
                                    ) : p.title}
                                </h3>
                                {p.href ? (
                                    <LuArrowUpRight
                                        aria-hidden
                                        className="size-5 shrink-0 text-muted-foreground transition-[color,translate] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                                    />
                                ) : null}
                            </div>
                            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                            <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-muted-foreground">
                                {p.tags.map((tag) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </SectionContent>
        </Section>
    );
}
