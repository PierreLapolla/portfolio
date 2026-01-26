// ai-assistant.tsx

"use client";

import React, {useCallback, useRef, useState} from "react";
import {useChat} from "@ai-sdk/react";
import {DefaultChatTransport, generateId} from "ai";

import {Conversation, ConversationContent, ConversationScrollButton,} from "@/components/ai-elements/conversation";
import {Message, MessageContent, MessageResponse} from "@/components/ai-elements/message";
import {
    PromptInput,
    PromptInputBody,
    PromptInputFooter,
    type PromptInputMessage,
    PromptInputSubmit,
    PromptInputTextarea,
    PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import {Loader} from "@/components/ai-elements/loader";

type AiAssistantProps = {
    api?: string;
    welcomeText?: string;
    className?: string;
};

export default function AiAssistant({
                                        api = "/api/chat",
                                        className = "max-w-4xl mx-auto p-6 relative size-full max-h-[50vh]",
                                    }: AiAssistantProps) {
    const [input, setInput] = useState("");
    const lastUserTextRef = useRef<string | null>(null);

    const {messages, sendMessage, setMessages, status, error, clearError} = useChat({
        transport: new DefaultChatTransport({api}),
        onError() {
            setMessages((current) => [
                ...current,
                {
                    id: generateId(),
                    role: "assistant",
                    parts: [
                        {
                            type: "text",
                            text: "Sorry, something went wrong. Please try again in a moment.",
                        },
                    ],
                },
            ]);
        },
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
