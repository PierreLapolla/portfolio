// ai-assistant.tsx

"use client";

import React, {useCallback, useEffect, useRef, useState} from "react";
import {useChat} from "@ai-sdk/react";
import {DefaultChatTransport, generateId} from "ai";
import {useTranslations} from "next-intl";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

import {
    Conversation,
    ConversationContent,
    ConversationEmptyState,
    ConversationScrollButton,
} from "@/components/ai-elements/conversation";
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
import { Suggestion, Suggestions } from '@/components/ai-elements/suggestion';
import {Loader} from "@/components/ai-elements/loader";
import {LuMessageSquare, LuSquarePen} from "react-icons/lu";

type AiAssistantProps = {
    api?: string;
    welcomeText?: string;
    className?: string;
};

// NOTE: suggestions are provided via translations (messages/...). On the client
// `useTranslations` may not expose a typed `raw` helper, so we access it via `any`
// and fall back to the original English suggestions if missing.

const STORAGE_KEY = "ai-assistant-messages";

export default function AiAssistant({
                                        api = "/api/chat",
                                        className = "max-w-4xl mx-auto p-6 relative size-full max-h-[50vh]",
                                    }: AiAssistantProps) {
    const t = useTranslations("assistant");
    // Safely access an optional `raw` helper on the translations object without using `any`.
    type RawGetter = { raw?: (k: string) => unknown };
    const rawGetter = t as unknown as RawGetter;
    const rawSuggestions = rawGetter.raw ? (rawGetter.raw("suggestions") as unknown) : null;
    const suggestions = Array.isArray(rawSuggestions) && rawSuggestions.length > 0
        ? (rawSuggestions as string[])
        : [
            'What can he do for work?',
            'What are his hobbies?'
        ];
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
                            text: t("error"),
                        },
                    ],
                },
            ]);
        },
    });

    useEffect(() => {
        if (typeof window === "undefined") return;
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (!stored) return;
        try {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed)) {
                setMessages(parsed);
            }
        } catch {
            // Ignore invalid persisted data.
        }
    }, [setMessages]);

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (messages.length === 0) {
            window.localStorage.removeItem(STORAGE_KEY);
            return;
        }
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }, [messages]);

    const isBusy = status === "submitted" || status === "streaming";
    const hasMessages = messages.length > 0 || isBusy;
    const containerClassName = cn(className, hasMessages ? "h-[55vh]" : "h-auto");
    const showSuggestions = messages.length === 0 && !isBusy;

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

    const handleNewChat = useCallback(() => {
        setMessages([]);
        setInput("");
        if (error) clearError();
        if (typeof window !== "undefined") {
            window.localStorage.removeItem(STORAGE_KEY);
        }
    }, [clearError, error, setMessages]);

    return (
        <div className={containerClassName}>
            <div className="flex flex-col h-full min-h-0">
                <Conversation className="min-h-0 overflow-y-auto">
                    <ConversationContent>
                        {messages.length === 0 ? (
                            <ConversationEmptyState
                                icon={<LuMessageSquare className="size-12" />}
                                title={t("empty.title")}
                                description={t("empty.description")}
                            />
                        ) : (
                            messages.map((message) => (
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
                        )))}
                        {status === "submitted" && <Loader/>}
                    </ConversationContent>
                    <ConversationScrollButton/>
                </Conversation>

                {showSuggestions && (
                    <div className="mt-4 flex justify-center">
                        <Suggestions className="w-full justify-center">
                            {suggestions.map((suggestion) => (
                                <Suggestion
                                    key={suggestion}
                                    suggestion={suggestion}
                                    onClick={submitText}
                                />
                            ))}
                        </Suggestions>
                    </div>
                )}

                <PromptInput onSubmit={handleSubmit} className="mt-4 p-2">
                    <PromptInputBody>
                        <PromptInputTextarea
                            value={input}
                            onChange={handleInputChange}
                            placeholder={t("placeholder")}
                        />
                    </PromptInputBody>

                    <PromptInputFooter>
                        <PromptInputTools>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleNewChat}
                                disabled={messages.length === 0 && !isBusy}
                            >
                                <LuSquarePen className="size-4"/>
                                {t("newChat")}
                            </Button>
                        </PromptInputTools>
                        <PromptInputSubmit disabled={!input.trim() || isBusy} status={status}/>
                    </PromptInputFooter>
                </PromptInput>
            </div>
        </div>
    );
}
