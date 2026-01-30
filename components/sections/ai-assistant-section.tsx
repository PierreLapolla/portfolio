// components/sections/ai-assistant--section.tsx
import * as React from "react";
import {Section} from "@/components/section";
import AiAssistant from "@/components/ai-assistant";
import {useTranslations} from "next-intl";

export function AiAssistantSection() {
    const t = useTranslations("assistant");

    return (
        <Section
            id="chat"
            title={t("title")}
            description={t("description")}
        >
            <AiAssistant
                api="/api/chat"
                className="mx-auto w-full max-w-4xl p-0 relative max-h-[55vh] h-auto overflow-hidden"
            />
        </Section>
    );
}
