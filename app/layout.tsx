import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "@aws-amplify/ui-react/styles.css";
import React from "react";
import {AmplifyUIProvider} from "./components/AmplifyUIProvider"

const inter = Inter({subsets: ["latin"]});

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
        <body className={inter.className}>
        <AmplifyUIProvider>
            {children}
        </AmplifyUIProvider>
        </body>
        </html>
    );
}
