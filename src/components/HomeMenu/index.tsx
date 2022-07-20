import { Flex, Text, Image } from '@chakra-ui/react';
import LogoKnedle from '../../assets/logo_knedle.svg';

export default function HomeMenu() {
    return (
        <Flex
            justifyContent='space-between'
            alignItems='center'
            padding='1rem'
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
                <a href="http://nido.unb.br/">
                    <Image
                        src={LogoKnedle.src}
                        height='2rem'
                    />
                </a>
            </Flex>
        </Flex>
    )
}