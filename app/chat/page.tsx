"use client";

import {FormEvent, useState} from "react";
import {useChat} from "@ai-sdk/react";
import {DefaultChatTransport, generateId, type UIMessage} from "ai";
import ChatUI from "@/app/components/ChatUI"

const INITIAL_MESSAGES: UIMessage[] = [
    {
        id: generateId(),
        role: "assistant",
        parts: [
            {
                type: "text",
                text: "Hi, I'm Pierre's personal assistant. Ask me anything about Pierre, his background, projects, or preferences.",
            },
        ],
    },
];


export default function ChatPage() {
    const [input, setInput] = useState("");

    const {messages, sendMessage, status, error, clearError, setMessages} = useChat({
        transport: new DefaultChatTransport({
            api: "/api/chat",
            prepareSendMessagesRequest({messages, id, body}) {
                return {
                    body: {
                        ...body,
                        id,
                        messages,
                    },
                };
            },
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
        messages: INITIAL_MESSAGES,
    });

    const isBusy = status === "submitted" || status === "streaming";

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isBusy) return;

        const trimmed = input.trim();
        if (!trimmed) return;

        if (error) clearError();

        await sendMessage({
            role: "user",
            parts: [{type: "text", text: trimmed}],
        });

        setInput("");
    };

    return (
        <ChatUI
            messages={messages}
            input={input}
            isBusy={isBusy}
            onInputChange={setInput}
            onSubmit={handleSubmit}
        />
    );
}
