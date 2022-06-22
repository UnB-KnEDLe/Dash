import { Flex, Text } from '@chakra-ui/react';
import MenuLink from '../Typography/MenuLink';

export default function HomeMenu() {
    return (
        <Flex
            justifyContent='space-between'
            alignItems='center'
            paddingInline='1rem'
            paddingBlock='1rem'
        >
            <Text
                fontSize='3xl'
                fontWeight='bold'
                letterSpacing='tight'
                w="64"
                color="pallete.primary"
                > 
                knedash
                <Text
                    as="span"
                    ml='0.5'
                    color="pallete.secondary">.
                </Text>
            </Text>
            <Flex gap='4rem'>
                <a href="#">
                    <MenuLink
                        color='pallete.primary'
                        menuLinkText='Workshop'
                    />
                </a>
                <a href="#">
                    <MenuLink
                        color='pallete.primary'
                        menuLinkText='Equipe'
                    />
                </a>
                <a href="#">
                    <MenuLink
                        color='pallete.primary'
                        menuLinkText='Ajuda'
                    />
                </a>
            </Flex>
        </Flex>
    )
}