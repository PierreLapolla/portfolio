"use client";

import {Button, Card, Flex, Heading, Text, View} from "@aws-amplify/ui-react";

export default function HomePage() {
    return (
        <View as="main" height="100vh">
            <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
                padding="2rem"
                gap="1rem"
            >
                <Heading level={1}>This site is under construction</Heading>
                <Text textAlign="center" maxWidth="480px">
                    Thanks for stopping by. I&apos;m currently building my portfolio site.
                    Please check back soon!
                </Text>

                <Button
                    variation="primary"
                    as="a"
                    href="mailto:pro@pierrelapolla.com"
                >
                    E-mail me
                </Button>
            </Flex>
        </View>
    );
}
