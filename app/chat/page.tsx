"use client";

import {FormEvent, useState} from "react";
import {useChat} from "@ai-sdk/react";
import {DefaultChatTransport, generateId} from "ai";
import ChatUI, {ChatMessage, ChatRole} from "@/app/components/ChatUI"

export default function ChatPage() {
    const [input, setInput] = useState("");

    const {messages, sendMessage, status, error, clearError, setMessages} = useChat({
        transport: new DefaultChatTransport({
            api: "/api/chat",
        }),
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


    const isStreaming = status === "streaming";

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmed = input.trim();
        if (!trimmed) return;

        if (error) clearError();

        await sendMessage({
            role: "user",
            parts: [{type: "text", text: trimmed}],
        });

        setInput("");
    };

    const uiMessages: ChatMessage[] = messages
        .map((message) => {
            const content = message.parts
                ?.filter((part) => part.type === "text")
                .map((part) => part.text as string)
                .join("\n");

            if (!content) return null;

            const role: ChatRole = message.role === "user" ? "user" : "assistant";

            return {
                id: message.id,
                role,
                content,
            };
        })
        .filter((m): m is ChatMessage => m !== null);

    return (
        <ChatUI
            messages={uiMessages}
            input={input}
            isStreaming={isStreaming}
            onInputChange={setInput}
            onSubmit={handleSubmit}
        />
    );
}
