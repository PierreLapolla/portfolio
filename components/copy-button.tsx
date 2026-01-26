"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

type CopyToClipboardButtonProps = {
    value: string
    label?: string
    className?: string
    disabled?: boolean
}

export function CopyToClipboardButton({
                                          value,
                                          label = "Copy",
                                          className,
                                          disabled,
                                      }: CopyToClipboardButtonProps) {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value)
            setCopied(true)
            window.setTimeout(() => setCopied(false), 1200)
        } catch (error) {
            console.error("Failed to copy: ", error)
        }
    }

    const iconBase = "h-[1em] w-[1em] transition-all"

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={handleCopy}
            aria-label={copied ? "Copied" : "Copy to clipboard"}
            disabled={disabled}
            className={className}
        >
            <Copy className={`${iconBase} ${copied ? "scale-0 opacity-0" : ""}`} />
            <Check
                className={`${iconBase} absolute scale-0 opacity-0 ${
                    copied ? "scale-100 opacity-100" : ""
                }`}
            />
            <span className="sr-only">{label}</span>
        </Button>
    )
}
