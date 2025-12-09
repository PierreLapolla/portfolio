import { Badge, Button, Flex, Heading, Text, View } from "@aws-amplify/ui-react";
import { ExternalLink, Github } from "lucide-react";
import { Gaps, rv } from "@/app/styles/styles";

export interface Project {
    slug: string;
    category: string;
    title: string;
    description: string;
    tech: string[];
    url?: string;
}

export default function ProjectCard({project}: { project: Project }) {
    const {title, category, description, tech, url} = project;

    let isGithub = false;
    if (url) {
        try {
            const hostname = new URL(url).hostname;
            isGithub = hostname === "github.com" || hostname.endsWith(".github.com");
        } catch {
        }
    }

    const Icon = isGithub ? Github : ExternalLink;

    return (
        <View
            as="article"
            backgroundColor="background.secondary"
            borderRadius="large"
            padding={rv({ base: "var(--amplify-space-md)", medium: "var(--amplify-space-lg)" })}
            boxShadow="large"
        >
            <Flex
                direction="column"
                gap={rv({ base: "var(--amplify-space-md)", medium: "var(--amplify-space-lg)" })}
                height="100%"
            >
                <Flex direction="column" gap={rv({ base: "var(--amplify-space-md)", medium: "var(--amplify-space-lg)" })}>
                    <Flex alignItems="center" gap={Gaps.normal}>
                        <Heading level={3}>{title}</Heading>
                    </Flex>

                    <Text>{description}</Text>

                    <Flex as="ul" gap={Gaps.normal} wrap="wrap">
                        {tech.map((t) => (
                            <Badge as="li" key={t} variation="info" size="small">
                                {t}
                            </Badge>
                        ))}
                    </Flex>
                </Flex>

                {/* Button pinned to bottom */}
                {url && (
                    <Button
                        as="a"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variation="link"
                        gap={Gaps.normal}
                        marginTop="auto"
                    >
                        <Icon size="1em" />
                        View
                    </Button>
                )}
            </Flex>
        </View>
    );
}
