"use client";

import { FormEvent, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import {
    Heading,
    View,
    Flex,
    Text,
    Button,
    TextField,
} from "@aws-amplify/ui-react";

export default function ChatPage() {
    const [input, setInput] = useState("");

    const { messages, sendMessage, status, error, clearError } = useChat({
        transport: new DefaultChatTransport({
            api: "/api/chat", // Next.js API route that proxies to FastAPI
        }),
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const text = input.trim();
        if (!text) return;

        if (error) {
            clearError();
        }

        await sendMessage({
            role: "user",
            parts: [{ type: "text", text }],
        });

        setInput("");
    };

    const isStreaming = status === "streaming";

    return (
        <View as="main" padding="2rem">
            <Flex
                direction="column"
                gap="1rem"
                maxWidth="900px"
                margin="0 auto"
                minHeight="70vh"
            >
                {/* Header */}
                <Flex direction="column" gap="0.25rem">
                    <Heading level={1} textAlign="center">Chat with me about Pierre</Heading>
                    <Text fontSize="0.9rem" color="font.tertiary" textAlign="center">
                        Ask anything about Pierre, his work, or anything else you&apos;re
                        curious about.
                    </Text>
                </Flex>

                {/* Chat area */}
                <View
                    flex="1"
                    borderRadius="1rem"
                    border="1px solid"
                    borderColor="border.primary"
                    padding="1rem"
                    backgroundColor="background.secondary"
                    minHeight="320px"
                    maxHeight="60vh"
                    overflow="auto"
                >
                    <Flex direction="column" gap="0.75rem">
                        {messages.map((message) => {
                            const isUser = message.role === "user";

                            const content = message.parts
                                ?.filter((part) => part.type === "text")
                                .map((part) => part.text)
                                .join("\n");

                            if (!content) return null;

                            return (
                                <Flex
                                    key={message.id}
                                    justifyContent={isUser ? "flex-end" : "flex-start"}
                                >
                                    <Flex
                                        direction="column"
                                        maxWidth="80%"
                                        padding="0.75rem 1rem"
                                        borderRadius="0.9rem"
                                        backgroundColor={
                                            isUser ? "brand.primary.80" : "background.primary"
                                        }
                                        boxShadow="small"
                                        gap="0.25rem"
                                    >
                                        <Text
                                            fontSize="0.75rem"
                                            color={isUser ? "font.inverse" : "font.secondary"}
                                        >
                                            {isUser ? "You" : "AI"}
                                        </Text>
                                        <Text
                                            whiteSpace="pre-wrap"
                                            color={isUser ? "font.inverse" : "font.primary"}
                                        >
                                            {content}
                                        </Text>
                                    </Flex>
                                </Flex>
                            );
                        })}

                        {/* Error shown as an AI message */}
                        {error && (
                            <Flex justifyContent="flex-start">
                                <Flex
                                    direction="column"
                                    maxWidth="80%"
                                    padding="0.75rem 1rem"
                                    borderRadius="0.9rem"
                                    backgroundColor="background.primary"
                                    boxShadow="small"
                                    border="1px solid"
                                    borderColor="border.error"
                                    gap="0.25rem"
                                >
                                    <Text fontSize="0.75rem" color="font.error">
                                        AI
                                    </Text>
                                    <Text whiteSpace="pre-wrap">
                                        I tried to respond, but I couldn&apos;t reach the server.
                                        This might be a temporary issue. Please try sending your
                                        message again in a moment.
                                    </Text>
                                </Flex>
                            </Flex>
                        )}

                        {/* Streaming status */}
                        {isStreaming && !error && (
                            <Flex justifyContent="flex-start">
                                <Flex
                                    padding="0.5rem 0.75rem"
                                    borderRadius="9999px"
                                    backgroundColor="background.primary"
                                >
                                    <Text fontSize="0.8rem" color="font.secondary">
                                        Thinking…
                                    </Text>
                                </Flex>
                            </Flex>
                        )}
                    </Flex>
                </View>

                {/* Input bar */}
                <Flex
                    as="form"
                    onSubmit={handleSubmit}
                    gap="0.75rem"
                    alignItems="flex-end"
                >
                    <TextField
                        label="Your message"
                        labelHidden
                        flex="1"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Send a message..."
                        isDisabled={isStreaming}
                    />
                    <Button
                        type="submit"
                        variation="primary"
                        isDisabled={isStreaming}
                        isLoading={isStreaming}
                    >
                        Send
                    </Button>
                </Flex>
            </Flex>
        </View>
    );
}
