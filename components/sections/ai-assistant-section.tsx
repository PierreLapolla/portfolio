// components/sections/ai-assistant--section.tsx
import * as React from "react";
import {Section} from "@/components/section";
import AiAssistant from "@/components/ai-assistant";

export function AiAssistantSection() {
    return (
        <Section
            id="chat"
            title="Assistant"
            description="Ask anything you want to know about Pierre."
        >
            <AiAssistant
                api="/api/chat"
                welcomeText="Hi, I'm Pierre's personal assistant. Ask me anything about Pierre, his background, projects, or preferences."
                className="mx-auto w-full max-w-4xl p-0 relative size-full h-[55vh]"
            />
        </Section>
    );
}
