import { Flex } from "@chakra-ui/react";

export default function Container({children}) {
    return (
        <Flex
            direction="row"
            w="100%"
            my="6"
            maxWidth={1400}
            mx="auto"
            px="12"
        >
            {children}
        </Flex>
    );
}
