"use client";

import { Alert, Badge, Button, Card, Flex, Heading, Text } from "@aws-amplify/ui-react";
import { R2, S } from "@/app/styles/styles";
import { Container } from "@/app/components/Container";

export default function HomePage() {
    return (
        <Container as="main">
            <Flex
                direction="column"
                gap={R2(S.xl, S.xxl)}
            >
                {/* Status banner */}
                <Alert variation="info" isDismissible={true}>
                    🚧 This site is under construction, bugs may occur and features may change. 🚧
                </Alert>
                <Alert variation="info" isDismissible={true}>
                    The current UI is not made for phones, please use a desktop for best experience.
                </Alert>

                {/* Hero */}
                <Flex direction="column" gap={R2(S.md, S.lg)}>
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

                    <Flex gap={R2(S.sm, S.md)} wrap="wrap">
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
                <Flex direction="column" gap={R2(S.lg, S.xl)}>
                    <Heading level={2}>
                        What I like to work on
                    </Heading>

                    <Flex gap={R2(S.lg, S.xl)} wrap="wrap">
                        <Card
                            maxWidth="320px"
                            flex="1 1 260px"
                        >
                            <Badge size="small" variation="info">
                                Cloud & Backend
                            </Badge>
                            <Heading level={3} marginTop="var(--amplify-space-sm)">
                                Cloud & Backend Engineering
                            </Heading>
                            <Text as="p" marginTop="var(--amplify-space-sm)">
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
                            <Heading level={3} marginTop="var(--amplify-space-sm)">
                                Applied AI & Data
                            </Heading>
                            <Text as="p" marginTop="var(--amplify-space-sm)">
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
                            <Heading level={3} marginTop="var(--amplify-space-sm)">
                                Software Craft & Learning
                            </Heading>
                            <Text as="p" marginTop="var(--amplify-space-sm)">
                                Writing clean, structured code and improving developer experience with
                                templates, automation, and good practices. I like sharing what I build,
                                from LaTeX and Python templates to small open-source utilities.
                            </Text>
                        </Card>
                    </Flex>
                </Flex>

                {/* Background */}
                <Flex direction="column" gap={R2(S.md, S.lg)}>
                    <Heading level={2}>
                        Background
                    </Heading>

                    <Flex direction="column" gap={R2(S.sm, S.md)}>
                        <Card>
                            <Heading level={3} fontSize="1.1rem">
                                Capgemini · Cloud & Backend Internship
                            </Heading>
                            <Text as="p" marginTop="var(--amplify-space-sm)">
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
                            <Text as="p" marginTop="var(--amplify-space-sm)">
                                Contributed to a research project on road traffic flow prediction using
                                graph neural networks. Involved literature review, model design, and
                                participation in scientific writing.
                            </Text>
                        </Card>

                        <Card>
                            <Heading level={3} fontSize="1.1rem">
                                Arkema · Industrial Data Prototype
                            </Heading>
                            <Text as="p" marginTop="var(--amplify-space-sm)">
                                Built a prototype around industrial sensor data collection, management
                                and monitoring using a Raspberry Pi connected to AWS, with attention to
                                reliability and simplicity in an industrial context.
                            </Text>
                        </Card>

                        <Card>
                            <Heading level={3} fontSize="1.1rem">
                                ECE Paris · Cloud Engineering &amp; Management
                            </Heading>
                            <Text as="p" marginTop="var(--amplify-space-sm)">
                                Master&apos;s-level engineering degree with a major in Cloud Engineering
                                &amp; Management. Foundations in computer science, networks, security,
                                DevOps, and AI, plus project-based teamwork.
                            </Text>
                        </Card>
                    </Flex>
                </Flex>

                {/* AI assistant section */}
                <Flex direction="column" gap={R2(S.md, S.lg)}>
                    <Heading level={2}>
                        Talk to my AI assistant
                    </Heading>

                    <Text as="p">
                        I built an AI assistant with context on my background, projects, and interests.
                        It can answer questions like a personal recruiter-facing FAQ: my experience,
                        what I enjoy working on, and how I approach problems.
                    </Text>

                    <Flex gap={R2(S.sm, S.md)} wrap="wrap">
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
        </Container>
    );
}
