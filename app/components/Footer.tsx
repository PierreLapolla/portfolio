"use client";

import { Flex, Text, View } from "@aws-amplify/ui-react";
import { FooterGap, FooterPadding } from "@/app/styles/styles";
import { Container } from "@/app/components/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <View as="footer" padding={FooterPadding}>
      <Container as="div" noPaddingX noPaddingY>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={FooterGap}
        >
          <Text color="font.tertiary">
            © {currentYear} Pierre Lapolla. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </View>
  );
}

