"use client";

import { Grid, Heading, View } from "@aws-amplify/ui-react";
import ProjectCard, { Project } from "@/app/components/ProjectCard";
import { rv } from "@/app/styles/styles";
import { Container } from "@/app/components/Container";


const projects: Project[] = [
    {
        slug: "capgemini",
        category: "internship",
        title: "Capgemini",
        description: "TODO",
        tech: ["TODO"],
        url: "https://www.capgemini.com"
    },
    {
        slug: "lyrids",
        category: "internship",
        title: "LyRIDS",
        description: "TODO",
        tech: ["TODO"],
        url: "https://www.ece.fr/lecole-2/le-centre-de-recherche/",
    },
    {
        slug: "arkema",
        category: "internship",
        title: "Arkema",
        description: "TODO",
        tech: ["TODO"],
        url: "https://www.arkema.com"
    },
    {
        slug: "missor",
        category: "internship",
        title: "Atelier Missor",
        description: "TODO",
        tech: ["TODO"],
        url: "https://www.ateliermissor.com/",
    },
    {
        slug: "python-template",
        category: "personal",
        title: "Python app template",
        description: "A template for python applications including most of best practices needed.",
        tech: ["Python"],
        url: "https://github.com/PierreLapolla/python_template",
    },
    {
        slug: "pedros",
        category: "personal",
        title: "Pedros",
        description: "A small utility package for Python, mostly for my personal projects.",
        tech: ["Python"],
        url: "https://github.com/PierreLapolla/pedros",
    },
    {
        slug: "portfolio",
        category: "personal",
        title: "Personal portfolio",
        description: "My main portfolio built with Next.js, AWS Amplify UI and TypeScript. You are currently viewing it!",
        tech: ["Next.js", "TypeScript", "AWS Amplify"],
        url: "https://github.com/PierreLapolla/portfolio",
    },
    {
        slug: "lightning-template",
        category: "personal",
        title: "PyTorch Lightning template",
        description: "A fork of my python template, with basic setup for AI projects.",
        tech: ["Python"],
        url: "https://github.com/PierreLapolla/lightning_template",
    },
    {
        slug: "arece",
        category: "personal",
        title: "ARECE",
        description: "The first french formula student student team in the autonomous class. I was a member of the trajectory team where we developed a neural network that can predict the optimal trajectory for the car.",
        tech: ["Python", "PyTorch"],
        url: "https://www.arece.eu/en",
    },
    {
        slug: "tex-template",
        category: "personal",
        title: "LaTeX template",
        description: "A template for LaTeX documents with basic setup for academic papers.",
        tech: ["LaTeX"],
        url: "https://github.com/PierreLapolla/tex_template",
    },
    {
        slug: "TODO",
        category: "school",
        title: "TODO",
        description: "TODO",
        tech: ["TODO"],
    },
    {
        slug: "TODO",
        category: "school",
        title: "TODO",
        description: "TODO",
        tech: ["TODO"],
    },
];


type ProjectCategory = Project["category"];

interface CategoryConfig {
    label: string;
}

const CATEGORY_CONFIG: Record<ProjectCategory, CategoryConfig> = {
    internship: { label: "Internships" },
    personal: { label: "Personal projects" },
    school: { label: "School projects" },
};

export default function ProjectsPage() {
    const categories: ProjectCategory[] = Array.from(
        new Set(projects.map((p) => p.category))
    ) as ProjectCategory[];

    return (
        <Container as="main">
            {categories.map((category) => {
                const categoryProjects = projects.filter(
                    (p) => p.category === category
                );
                const config = CATEGORY_CONFIG[category];

                const label = config?.label ?? category;

                return (
                    <View
                        as="section"
                        key={category}
                    >
                        <Heading level={2} textAlign="center" margin={rv({ base: "var(--amplify-space-lg)", medium: "var(--amplify-space-xxl)" })}>
                            {label}
                        </Heading>

                        <Grid
                            templateColumns={{ base: "1fr", medium: "1fr 1fr" }}
                            gap={rv({ base: "var(--amplify-space-lg)", medium: "var(--amplify-space-xxl)" })}
                        >
                            {categoryProjects.map((project) => (
                                <ProjectCard
                                    key={project.slug}
                                    project={project}
                                />
                            ))}
                        </Grid>
                    </View>
                );
            })}
        </Container>
    );
}
