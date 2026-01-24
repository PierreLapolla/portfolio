// layout.tsx

import type { Metadata } from "next"
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google"
import "./globals.css"
import React from "react"

import { cn } from "@/lib/utils"
import { AppShell } from "@/components/app-shell"

const notoSans = Noto_Sans({ variable: "--font-sans", subsets: ["latin"] })

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Portfolio",
    description: "My personal portfolio website.",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={notoSans.variable} suppressHydrationWarning>
        <body
            className={cn(
                geistSans.variable,
                geistMono.variable,
                "min-h-screen bg-background font-sans text-foreground antialiased"
            )}
        >
        <AppShell>{children}</AppShell>
        </body>
        </html>
    )
}
