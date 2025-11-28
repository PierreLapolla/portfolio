import type {UIMessage} from "ai";
import {Flex, Text} from "@aws-amplify/ui-react";

interface ChatBubbleProps {
    message: UIMessage;
}

export function ChatBubble({message}: ChatBubbleProps) {
    const isUser = message.role === "user";

    const content =
        message.parts
            ?.filter((part) => part.type === "text")
            .map((part) => part.text as string)
            .join("\n") ?? "";

    return (
        <Flex justifyContent={isUser ? "flex-end" : "flex-start"}>
            <Flex
                direction="column"
                maxWidth="80%"
                padding="0.75rem"
                borderRadius="large"
                backgroundColor={isUser ? "background.tertiary" : "background.secondary"}
                gap="0.25rem"
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
