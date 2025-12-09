"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import { Home, MessageCircle, Folder, LucideMail } from "lucide-react";
import { Gaps, rv, IconSize } from "@/app/styles/styles";

const navTabs = [
    { label: "Home", href: "/", icon: Home },
    { label: "Chat", href: "/chat", icon: MessageCircle },
    { label: "Projects", href: "/projects", icon: Folder },
    { label: "Contact", href: "/contact", icon: LucideMail },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <Flex
            as="nav"
            alignItems="center"
            justifyContent="center"
            gap={Gaps.normal}
            wrap={rv({ base: "wrap", medium: "nowrap" })}
        >
            {navTabs.map((tab) => {
                const isActive = pathname === tab.href;
                const Icon = tab.icon;

                return (
                    <Button
                        key={tab.href}
                        as={Link}
                        href={tab.href}
                        variation={isActive ? "primary" : "link"}
                        paddingInline={rv({ base: "var(--amplify-space-sm)", medium: "var(--amplify-space-md)" })}
                        paddingBlock={rv({ base: "var(--amplify-space-xs)", medium: "var(--amplify-space-sm)" })}
                    >
                        {Icon && <Icon size={IconSize.sm} />}
                        <Text
                            as="span"
                            marginLeft="var(--amplify-space-xs)"
                            fontSize={{ base: "0.75rem", medium: "0.9rem" }}
                            display={{ base: "none", small: "inline" }}
                        >
                            {tab.label}
                        </Text>
                    </Button>
                );
            })}
        </Flex>
    );
}
