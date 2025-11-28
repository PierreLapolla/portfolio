import {Flex, Text} from "@aws-amplify/ui-react";
import type {ChatMessage} from "@/app/components/ChatUI";

interface ChatBubbleProps {
    message: ChatMessage;
}

export function ChatBubble({message}: ChatBubbleProps) {
    const isUser = message.role === "user";

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
                    {message.content}
                </Text>
            </Flex>
        </Flex>
    );
}
