
"use client";

import { Button, Flex, View } from "@aws-amplify/ui-react";
import { Navbar } from "@/app/components/Navbar";
import { useAppColorMode } from "@/app/components/AppShell";
import { Github, Linkedin, Moon, Sun } from "lucide-react";
import { Gaps, HeaderPadding, headerRow, R2, IconSize, HeaderZ } from "@/app/styles/styles";
import { Container } from "@/app/components/Container";

export function Header() {
    const { colorMode, toggleColorMode } = useAppColorMode();
    const isDark = colorMode === "dark";

    return (
        <View
            as="header"
            padding={HeaderPadding}
            backgroundColor="background.primary"
            style={{ position: "sticky", top: 0, zIndex: HeaderZ }}
        >
            <Container as="div" noPaddingX noPaddingY>
            <Flex as="div" {...headerRow}>
                {/* LEFT */}
                <Flex
                    flex="1"
                    justifyContent={R2("center", "flex-start")}
                    alignItems="center"
                >
                    {/*  */}
                </Flex>

                {/* CENTER: navigation */}
                <Flex flex="1" justifyContent="center" alignItems="center">
                    <Navbar />
                </Flex>

                {/* RIGHT: social links + theme toggle */}
                <Flex
                    flex="1"
                    justifyContent={R2("center", "flex-end")}
                    alignItems="center"
                    gap={Gaps.tight}
                >
                    <Button
                        as="a"
                        href="https://github.com/PierreLapolla"
                        target="_blank"
                        rel="noopener noreferrer"
                        variation="link"
                        aria-label="Open GitHub profile"
                    >
                        <Github size={IconSize.md} />
                    </Button>

                    <Button
                        as="a"
                        href="https://fr.linkedin.com/in/pierrelapolla"
                        target="_blank"
                        rel="noopener noreferrer"
                        variation="link"
                        aria-label="Open LinkedIn profile"
                    >
                        <Linkedin size={IconSize.md} />
                    </Button>

                    <Button
                        onClick={toggleColorMode}
                        variation="link"
                        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
                    >
                        {isDark ? <Sun size={IconSize.md} /> : <Moon size={IconSize.md} />}
                    </Button>
                </Flex>
            </Flex>
            </Container>
        </View>
    );
}
