"use client";

import {Flex, Text, View, Heading} from "@aws-amplify/ui-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <View as="footer" padding="1rem">
            <Flex direction="column" justifyContent="center" alignItems="center" gap="0.25rem">

                <Heading level={5}>
                    🚧 This site is currently under construction 🚧
                </Heading>

                <Text color="font.tertiary">
                    © {currentYear} Pierre Lapolla. All rights reserved.
                </Text>

            </Flex>
        </View>
    );

}

