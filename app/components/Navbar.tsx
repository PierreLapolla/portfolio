"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {Button, Flex} from "@aws-amplify/ui-react";
import {Home, MessageCircle} from "lucide-react";
import React from "react";

interface NavTab {
    label: string;
    href: string;
    icon?: React.ElementType;
}

const navTabs: NavTab[] = [
    {label: "Home", href: "/", icon: Home},
    {label: "Chat", href: "/chat", icon: MessageCircle},
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <Flex as="nav" gap="0.5rem" alignItems="center">
            {navTabs.map((tab) => {
                const isActive = pathname === tab.href;

                return (
                    <Button
                        key={tab.href}
                        as={Link}
                        href={tab.href}
                        variation={isActive ? "primary" : "link"}
                        gap="0.5rem"
                    >
                        {tab.icon && <tab.icon size="1em"/>}
                        {tab.label}
                    </Button>
                );
            })}
        </Flex>
    );
}
