import {convertToModelMessages, streamText, type UIMessage,} from "ai";
import {mistral} from "@ai-sdk/mistral";

export const maxDuration = 30;

export async function POST(req: Request) {
    const {messages}: { messages: UIMessage[] } = await req.json();

    const result = streamText({
        model: mistral("mistral-small-latest"),
        system:
            "You are Pierre's personal assistant. You only answer questions about Pierre, his background, projects, and preferences. " +
            "If the user asks anything unrelated to Pierre, politely say you are only able to answer questions about Pierre.",
        messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
}
