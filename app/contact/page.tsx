"use client";

import {Button, Flex, Heading, Text, View} from "@aws-amplify/ui-react";

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
                    You can find quick access to my GitHub and LinkedIn profiles directly in the top right corner of
                    this site.
                </Text>

                <Text>
                    You can also send me an e-mail at
                    <Text fontWeight="bold" as="span">
                        {" "}pro@pierrelapolla.com :
                    </Text>
                    <Button
                        as="a"
                        href="mailto:pro@pierrelapolla.com"
                        variation="link"
                    >
                        E-mail me
                    </Button>
                </Text>
            </Flex>
        </View>
    );
}
