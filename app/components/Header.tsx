"use client";

import {Button, Flex, View} from "@aws-amplify/ui-react";
import {Navbar} from "@/app/components/Navbar";
import {useAppColorMode} from "@/app/components/AppShell";
import {Github, Linkedin, Moon, Sun} from "lucide-react";

export function Header() {
    const {colorMode, toggleColorMode} = useAppColorMode();
    const isDark = colorMode === "dark";

    return (
        <View as="header" padding="1rem" backgroundColor="background.primary" style={{position: "sticky", top: 0}}>
            <Flex as="div" alignItems="center" width="100%">
                {/* LEFT */}
                <Flex
                    flex="1"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                </Flex>

                {/* CENTER */}
                <Flex
                    flex="1"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Navbar/>
                </Flex>

                {/* RIGHT */}
                <Flex
                    flex="1"
                    justifyContent="flex-end"
                    alignItems="center"
                    gap="0rem"
                >
                    <Button
                        as="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/PierreLapolla"
                        variation="link"
                    >
                        <Github/>
                    </Button>

                    <Button
                        as="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://fr.linkedin.com/in/pierrelapolla"
                        variation="link"
                    >
                        <Linkedin/>
                    </Button>

                    <Button
                        onClick={toggleColorMode}
                        variation="link"
                        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
                    >
                        {isDark ? <Sun/> : <Moon/>}
                    </Button>
                </Flex>
            </Flex>
        </View>
    );
}
