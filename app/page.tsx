// app/page.tsx
import AiAssistant from "@/components/ai-assistant";
import { SectionStack } from "@/components/section-stack";
import { Section } from "@/components/section";

import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
    return (
        <SectionStack>
            <HeroSection />

            <ProjectsSection />

            <ExperienceSection />

            <SkillsSection />

            <Section
                id="chat"
                title="Assistant"
                description="Ask anything about Pierre: background, projects, preferences."
            >
                <AiAssistant
                    api="/api/chat"
                    welcomeText="Hi, I'm Pierre's personal assistant. Ask me anything about Pierre, his background, projects, or preferences."
                    className="mx-auto w-full max-w-4xl p-0 relative size-full h-[55vh]"
                />
            </Section>

            <ContactSection />
        </SectionStack>
    );
}
