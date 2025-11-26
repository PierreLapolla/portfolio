"use client";

import {Flex, Text, View} from "@aws-amplify/ui-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <View as="footer" padding="1rem">
            <Flex justifyContent="center" alignItems="center">
                <Text>
                    © {currentYear} Pierre Lapolla. All rights reserved.
                </Text>
            </Flex>
        </View>
    );
}

