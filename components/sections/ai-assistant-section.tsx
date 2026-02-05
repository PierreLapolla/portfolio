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
                    className="mx-auto w-full max-w-4xl p-0 relative max-h-[55vh] h-auto overflow-hidden"
                />
            </SectionContent>
        </Section>
    );
}
