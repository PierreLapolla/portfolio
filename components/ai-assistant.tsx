// ai-assistant.tsx

"use client";

import React, {useCallback, useRef, useState} from "react";
import {useChat} from "@ai-sdk/react";
import {DefaultChatTransport, generateId} from "ai";

import {
    Conversation,
    ConversationContent,
    ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {Message, MessageContent, MessageResponse} from "@/components/ai-elements/message";
import {
    PromptInput,
    PromptInputBody,
    PromptInputFooter,
    PromptInputSubmit,
    PromptInputTextarea,
    PromptInputTools,
    type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import {Loader} from "@/components/ai-elements/loader";

type ChatRole = "assistant" | "user";
type TextPart = { type: "text"; text: string };
type ChatMessage = { id: string; role: ChatRole; parts: TextPart[] };

type AiAssistantProps = {
    api?: string;
    welcomeText?: string;
    className?: string;
};

export default function AiAssistant({
                                        api = "/api/chat",
                                        welcomeText = "Hi, I'm Pierre's personal assistant. Ask me anything about Pierre, his background, projects, or preferences.",
                                        className = "max-w-4xl mx-auto p-6 relative size-full h-[50vh]",
                                    }: AiAssistantProps) {
    const [input, setInput] = useState("");
    const lastUserTextRef = useRef<string | null>(null);

    const [welcomeMessage] = useState<ChatMessage>(() => ({
        id: generateId(),
        role: "assistant",
        parts: [{type: "text", text: welcomeText}],
    }));

    const {messages, sendMessage, status, error, clearError} = useChat({
        transport: new DefaultChatTransport({api}),
        messages: [welcomeMessage],
    });

    const isBusy = status === "submitted" || status === "streaming";

    const submitText = useCallback(
        async (text: string) => {
            const trimmed = text.trim();
            if (!trimmed || isBusy) return;

            if (error) clearError();
            lastUserTextRef.current = trimmed;

            await sendMessage({
                role: "user",
                parts: [{type: "text", text: trimmed}],
            });

            setInput("");
        },
        [clearError, error, isBusy, sendMessage]
    );

    const handleSubmit = useCallback(
        async (message: PromptInputMessage) => {
            await submitText(message.text ?? "");
        },
        [submitText]
    );

    const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        if (error) clearError();
        setInput(e.target.value);
    };

    return (
        <div className={className}>
            <div className="flex flex-col h-full">
                <Conversation>
                    <ConversationContent>
                        {messages.map((message) => (
                            <Message from={message.role} key={message.id}>
                                <MessageContent>
                                    {message.parts.map((part, i) => {
                                        switch (part.type) {
                                            case "text":
                                                return (
                                                    <MessageResponse key={`${message.id}-${i}`}>
                                                        {part.text}
                                                    </MessageResponse>
                                                );
                                            default:
                                                return null;
                                        }
                                    })}
                                </MessageContent>
                            </Message>
                        ))}
                        {status === "submitted" && <Loader/>}
                    </ConversationContent>
                    <ConversationScrollButton/>
                </Conversation>

                <PromptInput onSubmit={handleSubmit} className="mt-4">
                    <PromptInputBody>
                        <PromptInputTextarea
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Type a message…"
                        />
                    </PromptInputBody>

                    <PromptInputFooter>
                        <PromptInputTools>{/* space for future tools */}</PromptInputTools>
                        <PromptInputSubmit disabled={!input.trim() || isBusy} status={status}/>
                    </PromptInputFooter>
                </PromptInput>
            </div>
        </div>
    );
}
