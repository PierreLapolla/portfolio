import {convertToModelMessages, streamText, type UIMessage} from "ai";
import {mistral} from "@ai-sdk/mistral";
import fs from "node:fs";
import path from "node:path";

export const maxDuration = 30;

const systemPromptTemplate = fs.readFileSync(
    path.join(process.cwd(), "data", "system_prompt.txt"),
    "utf8"
);

const pierreProfileText = fs.readFileSync(
    path.join(process.cwd(), "data", "pierre_profile.txt"),
    "utf8"
);


const finalSystemPrompt = systemPromptTemplate.replace(
    "{{PIERRE_PROFILE_TEXT}}",
    pierreProfileText
);

export async function POST(req: Request) {
    const {messages}: { messages: UIMessage[] } = await req.json();

    const result = streamText({
        model: mistral("mistral-small-latest"),
        system: finalSystemPrompt,
        messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
}