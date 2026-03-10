import * as React from "react";
import {Separator} from "@/components/ui/separator";
import type {Metadata} from "next";

import {HeroSection} from "@/components/sections/hero-section";
import {ProjectsSection} from "@/components/sections/projects-section";
import {ExperienceSection} from "@/components/sections/experience-section";
import {SkillsSection} from "@/components/sections/skills-section";
import {AiAssistantSection} from "@/components/sections/ai-assistant-section";
import {ContactSection} from "@/components/sections/contact-section";
import {CertificationsSection} from "@/components/sections/certifications-section";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Projects, experience, skills, certifications, and contact information.",
};

export default function HomePage() {
    const sections = [
        {key: "hero", node: <HeroSection/>},
        {key: "certifications", node: <CertificationsSection/>},
        {key: "projects", node: <ProjectsSection/>},
        {key: "experience", node: <ExperienceSection/>},
        {key: "skills", node: <SkillsSection/>},
        {key: "assistant", node: <AiAssistantSection/>},
        {key: "contact", node: <ContactSection/>},
    ];

    return (
        <div className="section-stack">
            {sections.map((section, index) => (
                <React.Fragment key={section.key}>
                    {index > 0 ? <Separator className="section-stack-separator"/> : null}
                    {section.node}
                </React.Fragment>
            ))}
        </div>
    );
}
