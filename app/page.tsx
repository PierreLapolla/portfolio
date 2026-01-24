import AiAssistant from "@/components/ai-assistant";

export default function HomePage() {
    return (
        <AiAssistant
            api="/api/chat"
            welcomeText="Hi, I'm Pierre's personal assistant. Ask me anything about Pierre, his background, projects, or preferences."
        />
    );
}
