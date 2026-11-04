// components/sections/ai-assistant--section.tsx
import AiAssistant from "@/components/ai-assistant";
import {Section, SectionContent, SectionHeader} from "@/components/section";
import {useTranslations} from "next-intl";

export function AiAssistantSection() {
    const t = useTranslations("assistant");
    const title = t("title");
    const description = t("description");

    return (
        <Section id="chat">
            <SectionHeader title={title} description={description} />
            <SectionContent>
                <AiAssistant
                    api="/api/chat"
                    className="relative w-full max-h-[70vh] overflow-hidden rounded-xl border bg-card p-4 sm:p-6"
                />
            </SectionContent>
        </Section>
    );
}
