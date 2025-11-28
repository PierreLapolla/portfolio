import {FormEvent, useEffect, useRef} from "react";
import {Flex, Link, Text, View} from "@aws-amplify/ui-react";
import {ChatBubble} from "@/app/components/ChatBubble";
import {ChatInput} from "@/app/components/ChatInput";

export type ChatRole = "user" | "assistant";

export interface ChatMessage {
    id: string;
    role: ChatRole;
    content: string;
}

interface ChatUIProps {
    messages: ChatMessage[];
    input: string;
    isStreaming: boolean;
    onInputChange: (value: string) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function ChatUI({
                           messages,
                           input,
                           isStreaming,
                           onInputChange,
                           onSubmit,
                       }: ChatUIProps) {
    const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({behavior: "smooth"});
    }, [messages.length]);

    return (
        <View as="main" padding="1rem" height="80vh">
            <Flex
                direction="column"
                gap="1rem"
                height="100%"
                maxWidth="60rem"
                margin="0 auto"
            >
                {/* Messages area */}
                <View as="section" flex="1" overflow="auto" padding="1rem">
                    <Flex direction="column" gap="0.75rem">
                        {messages.map((message) => (
                            <ChatBubble key={message.id} message={message}/>
                        ))}

                        {isStreaming && (
                            <Flex justifyContent="flex-start">
                                <Text fontSize="0.75rem" color="font.secondary">
                                    AI is typing…
                                </Text>
                            </Flex>
                        )}
                        <div ref={endOfMessagesRef}/>
                    </Flex>
                </View>

                {/* Input area */}
                <View as="form" onSubmit={onSubmit}>
                    <ChatInput
                        value={input}
                        onChange={onInputChange}
                        isStreaming={isStreaming}
                    />
                </View>
            </Flex>

            <View as="footer" padding="1rem">
                <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="0.25rem"
                >
                    <Text color="font.tertiary">
                        Chatbot powered by
                        <Link
                            href="https://mistral.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}
                            Mistral AI
                        </Link>
                    </Text>
                </Flex>
            </View>
        </View>
    );
}

export default ChatUI;
