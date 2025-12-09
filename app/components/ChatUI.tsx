import { FormEvent, useEffect, useRef } from "react";
import { Flex, Link, Text, View } from "@aws-amplify/ui-react";
import { ChatBubble } from "@/app/components/ChatBubble";
import { ChatInput } from "@/app/components/ChatInput";
import type { UIMessage } from "ai";
import { rv } from "@/app/styles/styles";
import { Container } from "@/app/components/Container";


interface ChatUIProps {
    messages: UIMessage[];
    input: string;
    isBusy: boolean;
    onInputChange: (value: string) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function ChatUI({
                           messages,
                           input,
                           isBusy,
                           onInputChange,
                           onSubmit,
                       }: ChatUIProps) {
    const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({behavior: "smooth"});
    }, [messages.length]);

    return (
        <Container as="main" height="80vh">
            <Flex
                direction="column"
                gap={rv({ base: "var(--amplify-space-md)", medium: "var(--amplify-space-lg)" })}
                height="100%"
            >
                {/* Messages area */}
                <View as="section" flex="1" overflow="auto" padding={rv({ base: "var(--amplify-space-md)", medium: "var(--amplify-space-lg)" })}>
                    <Flex direction="column" gap={rv({ base: "var(--amplify-space-sm)", medium: "var(--amplify-space-md)" })}>
                        {messages.map((message) => (
                            <ChatBubble key={message.id} message={message}/>
                        ))}
                        <div ref={endOfMessagesRef}/>
                    </Flex>
                </View>

                {/* Input area */}
                <View as="form" onSubmit={onSubmit}>
                    <ChatInput
                        value={input}
                        onChange={onInputChange}
                        isBusy={isBusy}
                    />
                </View>
            </Flex>

            <View as="footer" padding={rv({ base: "var(--amplify-space-md)", medium: "var(--amplify-space-lg)" })}>
                <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap={rv({ base: "var(--amplify-space-xs)", medium: "var(--amplify-space-sm)" })}
                >
                    <Text color="font.tertiary" textAlign="center" width={{ base: "90vw", medium: "60vw" }}>
                        Chat powered by
                        <Link
                            href="https://mistral.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}
                            Mistral AI.
                            {" "}
                        </Link>
                        This assistant can make mistakes.
                    </Text>
                </Flex>
            </View>
        </Container>
    );
}
