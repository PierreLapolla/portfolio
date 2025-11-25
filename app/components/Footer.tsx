"use client";

import {Flex, Text, View} from "@aws-amplify/ui-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <View as="footer" padding="1.5rem" style={{borderTop: "1px solid #e0e0e0"}}>
            <Flex justifyContent="center" alignItems="center">
                <Text>
                    © {currentYear} Pierre Lapolla. All rights reserved.
                </Text>
            </Flex>
        </View>
    );
}

