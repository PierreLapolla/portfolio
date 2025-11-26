"use client";

import {Flex, View} from "@aws-amplify/ui-react";
import {Navbar} from "./Navbar";

export function Header() {
    return (
        <View as="header" padding="1rem">
            <Flex justifyContent="center" alignItems="center">
                <Navbar/>
            </Flex>
        </View>
    );
}

