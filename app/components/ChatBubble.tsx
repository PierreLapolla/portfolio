import type {UIMessage} from "ai";
import {Flex, Text} from "@aws-amplify/ui-react";
import { R2, S } from "@/app/styles/styles";

interface ChatBubbleProps {
    message: UIMessage;
}

export function markdownToPlainText(markdown: string): string {
    if (!markdown) return "";

    let text = markdown;

    // Headings: "### Title" -> "Title"
    text = text.replace(/^#{1,6}\s+/gm, "");

    // Bold / italic: **text** or *text* or __text__ -> text
    text = text.replace(/(\*\*|__)(.*?)\1/g, "$2");
    text = text.replace(/(\*|_)(.*?)\1/g, "$2");

    // Inline code: `code` -> code
    text = text.replace(/`([^`]+)`/g, "$1");

    // Links: [text](url) -> text (url) or just text if you prefer
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)");

    // Lists: "- item" or "* item" -> "• item"
    text = text.replace(/^\s*[-*]\s+/gm, "\n• ");

    // Excess blank lines
    text = text.replace(/\n{3,}/g, "\n\n");

    return text.trim();
}


export function ChatBubble({message}: ChatBubbleProps) {
    const isUser = message.role === "user";

    const rawContent =
        message.parts
            ?.filter((part) => part.type === "text")
            .map((part) => part.text as string)
            .join("\n") ?? "";

    const content = markdownToPlainText(rawContent);

    return (
        <Flex justifyContent={isUser ? "flex-end" : "flex-start"}>
            <Flex
                direction="column"
                maxWidth="80%"
                padding={R2(S.md, S.lg)}
                borderRadius="large"
                backgroundColor={isUser ? "background.tertiary" : "background.secondary"}
                gap={R2(S.xs, S.sm)}
            >
                <Text
                    as="span"
                    whiteSpace="pre-wrap"
                    style={{wordBreak: "break-word"}}
                >
                    {content}
                </Text>
            </Flex>
        </Flex>
    );
}
