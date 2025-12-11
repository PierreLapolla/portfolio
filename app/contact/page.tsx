"use client";

import {Button, Flex, Heading, Text} from "@aws-amplify/ui-react";
import {R2, S} from "@/app/styles/styles";
import {Container} from "@/app/components/Container";

export default function ContactPage() {
    return (
        <Container as="main">
            <Flex direction="column" gap={R2(S.lg, S.xl)}>
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
                    <Text fontWeight="bold" as="span"> {" "}pro@pierrelapolla.com :</Text>
                    <Button
                        as="a"
                        href="mailto:pro@pierrelapolla.com"
                        variation="link"
                    >
                        E-mail me
                    </Button>
                </Text>
            </Flex>
        </Container>
    );
}
