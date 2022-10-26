import { Flex } from "@chakra-ui/react";

export default function Container({children}) {
    return (
        <Flex
            as="main"
            flexDirection="column"
            minH="100vh"
            w="100%"
            maxWidth='1440px'
            paddingInline='6rem'
            paddingBlock='23'
        >
            {children}
        </Flex>
    );
}
