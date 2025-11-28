import type {Metadata} from "next";
import {JetBrains_Mono} from "next/font/google";
import "@aws-amplify/ui-react/styles.css";
import "@/app/globals.css"
import React from "react";
import {AppShell} from "@/app/components/AppShell";
import {Header} from "@/app/components/Header";
import {Footer} from "@/app/components/Footer";

const font = JetBrains_Mono({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Pierre Lapolla - Portfolio",
    description: "Welcome to my professional portfolio website.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={font.className}>
        <AppShell header={<Header/>} footer={<Footer/>}>
            {children}
        </AppShell>
        </body>
        </html>
    );
}
