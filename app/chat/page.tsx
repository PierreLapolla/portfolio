"use client";

import {FormEvent, useState} from "react";
import {useChat} from "@ai-sdk/react";
import {DefaultChatTransport} from "ai";
import {Heading, View} from "@aws-amplify/ui-react";

export default function ChatPage() {
    const [input, setInput] = useState("");

    const {messages, sendMessage, status, error, clearError} = useChat({
        transport: new DefaultChatTransport({
            api: "/api/chat", // Next.js API route that proxies to FastAPI
        }),
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const text = input.trim();
        if (!text) return;

        // If there was a previous error, clear it when user retries
        if (error) {
            clearError();
        }

        await sendMessage({
            role: "user",
            parts: [{type: "text", text}],
        });

        setInput("");
    };

    return (
        <View as="main" padding="2rem" maxWidth="800px" margin="0 auto">
            <Heading level={1} marginBottom="1rem">
                Chat
            </Heading>

            {/* Small status label (no error banner anymore) */}
            <div style={{marginBottom: "0.5rem", fontSize: "0.85rem"}}>
                {status === "streaming" && "Thinking…"}
            </div>

            {/* Messages list */}
            <div
                style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.75rem",
                    padding: "1rem",
                    height: "400px",
                    overflowY: "auto",
                    marginBottom: "1rem",
                    background: "#f9fafb",
                }}
            >
                {messages.map((message) => (
                    <div
                        key={message.id}
                        style={{
                            marginBottom: "0.75rem",
                            display: "flex",
                            justifyContent:
                                message.role === "user" ? "flex-end" : "flex-start",
                        }}
                    >
                        <div
                            style={{
                                maxWidth: "75%",
                                padding: "0.5rem 0.75rem",
                                borderRadius: "0.75rem",
                                backgroundColor:
                                    message.role === "user" ? "#2563eb" : "#e5e7eb",
                                color: message.role === "user" ? "white" : "#111827",
                                whiteSpace: "pre-wrap",
                                wordBreak: "break-word",
                            }}
                        >
                            {message.parts
                                ?.filter((part) => part.type === "text")
                                .map((part, idx) => (
                                    <span key={`${message.id}-${idx}`}>{part.text}</span>
                                ))}
                        </div>
                    </div>
                ))}

                {/* If an API error occurs, show it as a bot message */}
                {error && (
                    <div
                        style={{
                            marginTop: "0.75rem",
                            display: "flex",
                            justifyContent: "flex-start",
                        }}
                    >
                        <div
                            style={{
                                maxWidth: "75%",
                                padding: "0.5rem 0.75rem",
                                borderRadius: "0.75rem",
                                backgroundColor: "#fee2e2", // light red-ish
                                color: "#991b1b",
                                whiteSpace: "pre-wrap",
                                wordBreak: "break-word",
                                fontSize: "0.9rem",
                            }}
                        >
                            {/* Keep the message generic to avoid leaking backend details */}
                            Sorry, I had trouble talking to the server. Please try again.
                        </div>
                    </div>
                )}
            </div>

            {/* Input */}
            <form
                onSubmit={handleSubmit}
                style={{display: "flex", gap: "0.5rem", alignItems: "center"}}
            >
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Say something…"
                    style={{
                        flex: 1,
                        padding: "0.6rem 0.9rem",
                        borderRadius: "9999px",
                        border: "1px solid #d1d5db",
                        outline: "none",
                    }}
                />
                <button
                    type="submit"
                    disabled={status === "streaming"}
                    style={{
                        padding: "0.6rem 1.2rem",
                        borderRadius: "9999px",
                        border: "none",
                        cursor: "pointer",
                        backgroundColor: "#2563eb",
                        color: "white",
                        opacity: status === "streaming" ? 0.7 : 1,
                    }}
                >
                    Send
                </button>
            </form>
        </View>
    );
}
