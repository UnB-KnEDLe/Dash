import { Flex } from "@chakra-ui/react";

export default function Card(props) {
    const {children} = props;

    return (
        <Flex
            as='div'
            w='100%'
            h='100%'
            direction='column'
            bg='pallete.secondaryLight50'
            padding='1.5rem'
        >
            {children}
        </Flex>
    )
}