"use client";

import {Flex, Heading, Text, View} from "@aws-amplify/ui-react";

export default function ContactPage() {
    return (
        <View
            as="main"
            padding={{base: "2rem", large: "3rem"}}
            maxWidth="800px"
            margin="0 auto"
        >
            <Flex direction="column" gap="1.5rem">
                <Heading level={1}>Contact</Heading>

                <Text>
                    If you’d like to get in touch, the easiest way is to reach out to me
                    on LinkedIn.
                </Text>

                <Text>
                    You can find quick access to my{" "}
                    <Text as="span" fontWeight="bold">
                        GitHub
                    </Text>{" "}
                    and{" "}
                    <Text as="span" fontWeight="bold">
                        LinkedIn
                    </Text>{" "}
                    profiles directly in the{" "}
                    <Text as="span" fontWeight="bold">
                        header
                    </Text>{" "}
                    of this site.
                </Text>
            </Flex>
        </View>
    );
}
