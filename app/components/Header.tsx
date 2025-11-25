"use client";

import {Flex, View} from "@aws-amplify/ui-react";
import {Navbar} from "./Navbar";

export function Header() {
    return (
        <View as="header" padding="1.5rem" style={{borderBottom: "1px solid #e0e0e0"}}>
            <Flex justifyContent="center" alignItems="center">
                <Navbar/>
            </Flex>
        </View>
    );
}

