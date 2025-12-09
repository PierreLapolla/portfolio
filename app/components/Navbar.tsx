"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import { Home, MessageCircle, Folder, LucideMail } from "lucide-react";
import { Gaps, R2, S, IconSize } from "@/app/styles/styles";

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
            wrap={R2("wrap", "nowrap")}
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
                        paddingInline={R2(S.sm, S.md)}
                        paddingBlock={R2(S.xs, S.sm)}
                    >
                        {Icon && <Icon size={IconSize.md} />}
                        <Text
                            as="span"
                            marginLeft={S.xs}
                            fontSize={R2(S.md, S.lg)}
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
