// components/sections/ai-assistant--section.tsx
import AiAssistant from "@/components/ai-assistant";
import {useTranslations} from "next-intl";

export function AiAssistantSection() {
    const t = useTranslations("assistant");
    const title = t("title");
    const description = t("description");

    return (
        <section id="chat" className="section">
            <div className="page-container">
                <header className="section-header">
                    <h2 className="section-title">{title}</h2>
                    <p className="section-description">{description}</p>
                </header>
                <div className="section-content">
                    <AiAssistant
                        api="/api/chat"
                        className="mx-auto w-full max-w-4xl p-0 relative max-h-[55vh] h-auto overflow-hidden"
                    />
                </div>
            </div>
        </section>
    );
}
