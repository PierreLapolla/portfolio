"use client";

import {Grid, View} from "@aws-amplify/ui-react";
import ProjectCard, {Project} from "@/app/components/ProjectCard";


const projects: Project[] = [
    {
        slug: "portfolio",
        title: "Personal Portfolio",
        description:
            "My main portfolio built with Next.js, AWS Amplify UI and TypeScript.",
        tech: ["Next.js", "TypeScript", "AWS Amplify"],
        url: "https://github.com/PierreLapolla/portfolio",
    },
];


export default function ProjectsPage() {
    return (
        <View
            as="main"
            padding="1rem"
            maxWidth="960px"
            margin="0 auto"
        >
            <Grid
                templateColumns={{base: "1fr", medium: "1fr 1fr"}}
                gap="1.5rem"
            >
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project}/>
                ))}
            </Grid>
        </View>

    );
}
