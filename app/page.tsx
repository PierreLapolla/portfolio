"use client";

import {Badge, Button, Card, Divider, Flex, Heading, Text, View,} from "@aws-amplify/ui-react";
import Link from "next/link";

export default function HomePage() {
    return (
        <View as="main" padding="2rem">

            <Flex
                direction="column"
                gap="2.5rem"
                maxWidth="960px"
                margin="0 auto"
            >
                <Heading level={5}>
                    🚧 This site is currently under construction, bugs may occur. 🚧
                </Heading>
                {/* Hero */}
                <Flex direction="column" gap="1rem">
                    <Badge size="small" variation="info" alignSelf="flex-start">
                        Paris · Computer Science & Cloud
                    </Badge>

                    <Heading level={1}>Pierre Lapolla</Heading>

                    <Text as="p" fontSize="1.1rem" lineHeight="1.6">
                        Master&apos;s graduate in Computer Science & Cloud from ECE Paris,
                        currently working at Capgemini. I enjoy building reliable,
                        cloud-native applications and turning ideas into usable products.
                    </Text>

                    <Flex gap="1rem" wrap="wrap">
                        <Button
                            as={Link}
                            href="/chat"
                            variation="primary"
                        >
                            Chat with my AI
                        </Button>

                        <Button
                            as="a"
                            href="mailto:pro@pierrelapolla.com"
                            variation="link"
                        >
                            E-mail me
                        </Button>
                    </Flex>
                </Flex>

                <Divider/>

                {/* What I work on */}
                <Flex direction="column" gap="1.5rem">
                    <Heading level={2} fontSize="1.4rem">
                        What I like to work on
                    </Heading>

                    <Flex
                        gap="1.5rem"
                        wrap="wrap"
                    >
                        <Card maxWidth="300px" flex="1 1 260px">
                            <Heading level={3} fontSize="1.1rem">
                                Cloud & Backend
                            </Heading>
                            <Text as="p" marginTop="0.5rem">
                                Designing and implementing backend services that are scalable,
                                maintainable, and cloud-ready.
                            </Text>
                        </Card>

                        <Card maxWidth="300px" flex="1 1 260px">
                            <Heading level={3} fontSize="1.1rem">
                                Software Craft
                            </Heading>
                            <Text as="p" marginTop="0.5rem">
                                Writing clean, tested code and focusing on developer experience
                                and long-term reliability.
                            </Text>
                        </Card>

                        <Card maxWidth="300px" flex="1 1 260px">
                            <Heading level={3} fontSize="1.1rem">
                                Learning & Sharing
                            </Heading>
                            <Text as="p" marginTop="0.5rem">
                                Exploring new technologies around cloud, DevOps, and tooling,
                                then sharing what I learn.
                            </Text>
                        </Card>
                    </Flex>
                </Flex>

                {/* Background */}
                <Flex direction="column" gap="1rem">
                    <Heading level={2} fontSize="1.4rem">
                        Background
                    </Heading>

                    <View>
                        <Text as="p">
                            <strong>Capgemini</strong> – Professional experience in consulting
                            and cloud-oriented projects.
                        </Text>
                        <Text as="p" marginTop="0.25rem">
                            <strong>ECE Paris</strong> – Master&apos;s degree in Computer
                            Science &amp; Cloud.
                        </Text>
                    </View>
                </Flex>
            </Flex>
        </View>
    );
}
