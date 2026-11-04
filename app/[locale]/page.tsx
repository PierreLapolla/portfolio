import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";

import {HeroSection} from "@/components/sections/hero-section";
import {ProjectsSection} from "@/components/sections/projects-section";
import {ExperienceSection} from "@/components/sections/experience-section";
import {SkillsSection} from "@/components/sections/skills-section";
import {AiAssistantSection} from "@/components/sections/ai-assistant-section";
import {ContactSection} from "@/components/sections/contact-section";
import {CertificationsSection} from "@/components/sections/certifications-section";

export async function generateMetadata({params}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const {locale} = await params;
    const t = await getTranslations({locale, namespace: "meta"});
    return {
        title: {absolute: t("title")},
        description: t("description"),
        openGraph: {
            title: t("title"),
            description: t("description"),
            type: "website",
            locale,
        },
    };
}

export default function HomePage() {
    return (
        <div className="section-stack">
            <HeroSection/>
            <CertificationsSection/>
            <ProjectsSection/>
            <ExperienceSection/>
            <SkillsSection/>
            <AiAssistantSection/>
            <ContactSection/>
        </div>
    );
}
