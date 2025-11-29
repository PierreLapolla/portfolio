"use client";

import {
    Alert,
    Badge,
    Button,
    Card,
    Divider,
    Flex,
    Heading,
    Link,
    Text,
    View,
} from "@aws-amplify/ui-react";

export default function HomePage() {
    return (
        <View as="main" padding="2rem">
            <Flex
                direction="column"
                gap="2.5rem"
                maxWidth="960px"
                margin="0 auto"
            >
                {/* Status banner */}
                <Alert variation="info" isDismissible={true}>
                    🚧 This site is under construction, bugs may occur and features may change. 🚧
                </Alert>

                {/* Hero */}
                <Flex
                    direction="column"
                    gap="1rem"
                >
                    <Badge size="small" variation="info" alignSelf="flex-start">
                        Paris · Cloud & Software Engineering
                    </Badge>

                    <Heading level={1}>Pierre Lapolla</Heading>

                    <Text as="p">
                        Junior cloud & software engineer with hands-on experience in AWS, Python,
                        and backend development. I enjoy building reliable systems that connect
                        devices, services, and users, from Raspberry Pi prototypes to cloud-native
                        applications, and learning fast by working on real projects.
                    </Text>

                    <Flex
                        gap="1rem"
                        wrap="wrap"
                    >
                        <Button
                            as="a"
                            href="/chat"
                            variation="primary"
                        >
                            Chat with my AI assistant
                        </Button>

                        <Button
                            as="a"
                            href="mailto:pro@pierrelapolla.com"
                            variation="link"
                        >
                            Email me
                        </Button>

                        <Button
                            as="a"
                            href="https://github.com/PierreLapolla"
                            target="_blank"
                            rel="noreferrer"
                            variation="link"
                        >
                            GitHub
                        </Button>

                        <Button
                            as="a"
                            href="https://fr.linkedin.com/in/pierrelapolla"
                            target="_blank"
                            rel="noreferrer"
                            variation="link"
                        >
                            LinkedIn
                        </Button>
                    </Flex>
                </Flex>

                {/* What I like to work on */}
                <Flex direction="column" gap="1.5rem">
                    <Heading level={2}>
                        What I like to work on
                    </Heading>

                    <Flex
                        gap="1.5rem"
                        wrap="wrap"
                    >
                        <Card
                            maxWidth="320px"
                            flex="1 1 260px"
                        >
                            <Badge size="small" variation="info">
                                Cloud & Backend
                            </Badge>
                            <Heading level={3} marginTop="0.5rem">
                                Cloud & Backend Engineering
                            </Heading>
                            <Text as="p" marginTop="0.5rem">
                                Designing and implementing backend services that are scalable,
                                maintainable, and ready for the cloud. I like working with AWS,
                                FastAPI, and CI/CD pipelines to turn ideas into reliable services.
                            </Text>
                        </Card>

                        <Card
                            maxWidth="320px"
                            flex="1 1 260px"
                        >
                            <Badge size="small" variation="info">
                                AI & Data
                            </Badge>
                            <Heading level={3} marginTop="0.5rem">
                                Applied AI & Data
                            </Heading>
                            <Text as="p" marginTop="0.5rem">
                                Applying machine learning to concrete problems: from traffic prediction
                                with graph neural networks to computer vision with YOLO-based models.
                                I enjoy connecting ML prototypes with real-world constraints.
                            </Text>
                        </Card>

                        <Card
                            maxWidth="320px"
                            flex="1 1 260px"
                        >
                            <Badge size="small" variation="info">
                                Craft & Learning
                            </Badge>
                            <Heading level={3} marginTop="0.5rem">
                                Software Craft & Learning
                            </Heading>
                            <Text as="p" marginTop="0.5rem">
                                Writing clean, structured code and improving developer experience with
                                templates, automation, and good practices. I like sharing what I build,
                                from LaTeX and Python templates to small open-source utilities.
                            </Text>
                        </Card>
                    </Flex>
                </Flex>

                {/* Background */}
                <Flex direction="column" gap="1rem">
                    <Heading level={2}>
                        Background
                    </Heading>

                    <Flex direction="column" gap="0.5rem">
                        <Card>
                            <Heading level={3} fontSize="1.1rem">
                                Capgemini · Cloud & Backend Internship
                            </Heading>
                            <Text as="p" marginTop="0.5rem">
                                Worked on an AWS-based “Home Farming” project, building a prototype to
                                collect data from a Raspberry Pi into the cloud using FastAPI, and
                                setting up a CI/CD pipeline. Also explored computer vision with a
                                YOLOv11 segmentation model for tomato plants.
                            </Text>
                        </Card>

                        <Card>
                            <Heading level={3} fontSize="1.1rem">
                                LyRIDS · Research in AI
                            </Heading>
                            <Text as="p" marginTop="0.5rem">
                                Contributed to a research project on road traffic flow prediction using
                                graph neural networks. Involved literature review, model design, and
                                participation in scientific writing.
                            </Text>
                        </Card>

                        <Card>
                            <Heading level={3} fontSize="1.1rem">
                                Arkema · Industrial Data Prototype
                            </Heading>
                            <Text as="p" marginTop="0.5rem">
                                Built a prototype around industrial sensor data collection, management
                                and monitoring using a Raspberry Pi connected to AWS, with attention to
                                reliability and simplicity in an industrial context.
                            </Text>
                        </Card>

                        <Card>
                            <Heading level={3} fontSize="1.1rem">
                                ECE Paris · Cloud Engineering &amp; Management
                            </Heading>
                            <Text as="p" marginTop="0.5rem">
                                Master&apos;s-level engineering degree with a major in Cloud Engineering
                                &amp; Management. Foundations in computer science, networks, security,
                                DevOps, and AI, plus project-based teamwork.
                            </Text>
                        </Card>
                    </Flex>
                </Flex>

                {/* AI assistant section */}
                <Flex direction="column" gap="1rem">
                    <Heading level={2}>
                        Talk to my AI assistant
                    </Heading>

                    <Text as="p">
                        I built an AI assistant with context on my background, projects, and interests.
                        It can answer questions like a personal recruiter-facing FAQ: my experience,
                        what I enjoy working on, and how I approach problems.
                    </Text>

                    <Flex gap="1rem" wrap="wrap">
                        <Button
                            as="a"
                            href="/chat"
                            variation="primary"
                        >
                            Open the chat
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </View>
    );
}
