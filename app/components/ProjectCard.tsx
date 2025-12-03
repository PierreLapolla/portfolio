import {Badge, Button, Flex, Heading, Text, View} from "@aws-amplify/ui-react";
import {Github, ExternalLink} from "lucide-react";

export interface Project {
    slug: string;
    title: string;
    description: string;
    tech: string[];
    url?: string;
}

export default function ProjectCard({project}: { project: Project }) {
    const {title, description, tech, url} = project;

    let isGithub = false;
    if (url) {
        try {
            const hostname = new URL(url).hostname;
            isGithub = hostname === "github.com" || hostname.endsWith(".github.com");
        } catch {}
    }

    const Icon = isGithub ? Github : ExternalLink;

    return (
        <View
            as="article"
            backgroundColor="background.secondary"
            borderRadius="large"
            padding="1rem"
            boxShadow="large"
        >
            <Flex justifyContent="space-between" alignItems="flex-start" gap="1rem">
                <Flex direction="column" gap="1rem">
                    <Flex alignItems="center" gap="0.5rem">
                        <Heading level={3}>{title}</Heading>
                    </Flex>

                    <Text>{description}</Text>

                    <Flex as="ul" gap="0.5rem" wrap="wrap">
                        {tech.map((t) => (
                            <Badge
                                as="li"
                                key={t}
                                variation="info"
                                size="small"
                            >
                                {t}
                            </Badge>
                        ))}
                    </Flex>

                    {url && (
                        <Button
                            as="a"
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variation="link"
                            gap="0.5rem"
                        >
                            <Icon size="1em" />
                            View
                        </Button>
                    )}
                </Flex>
            </Flex>
        </View>
    );
}