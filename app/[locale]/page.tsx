import {SectionStack} from "@/components/section-stack";

import {HeroSection} from "@/components/sections/hero-section";
import {ProjectsSection} from "@/components/sections/projects-section";
import {ExperienceSection} from "@/components/sections/experience-section";
import {SkillsSection} from "@/components/sections/skills-section";
import {CertificationsSection} from "@/components/sections/certifications";
import {AiAssistantSection} from "@/components/sections/ai-assistant-section";
import {ContactSection} from "@/components/sections/contact-section";

export default function HomePage() {
    return (
        <SectionStack>
            <HeroSection/>
            <ProjectsSection/>
            <ExperienceSection/>
            <SkillsSection/>
            <CertificationsSection/>
            <AiAssistantSection/>
            <ContactSection/>
        </SectionStack>
    );
}
