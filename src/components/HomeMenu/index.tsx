import { Flex, Text } from '@chakra-ui/react';

export default function HomeMenu() {
    return (
        <Flex
            justifyContent='space-between'
            alignItems='center'
            paddingInline='1rem'
            paddingBlock='1rem'
        >
            <Text
                color='pallete.primary'
                fontSize="2rem"
                fontWeight={700}
            >
                Knedash
            </Text>
            <Flex gap='4rem'>
                <Text
                    color='pallete.primary'
                    fontSize="1.25rem"
                >Workshop
                </Text>
                <Text
                    color='pallete.primary'
                    fontSize="1.25rem"
                >
                    Equipe
                </Text>
                <Text
                    color='pallete.primary'
                    fontSize="1.25rem"
                >
                    Ajuda
                </Text>
            </Flex>
        </Flex>
    )
}