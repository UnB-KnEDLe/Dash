import { Flex, Text, Image, Link } from '@chakra-ui/react';

import fapdfLogo from '../../assets/companyLogos/fapdf.png';
import finatecLogo from '../../assets/companyLogos/finatec.svg';
import unbLogo from '../../assets/companyLogos/unb.svg';
import knedleLogo from '../../assets/companyLogos/knedle_logo.svg';

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
                fontSize="1.5rem"
                fontWeight={700}
            >
                Knedash.
            </Text>
            <Flex gap='4rem'>
                <Link href='https://fap.df.gov.br/' target='_blank'>
                    <Image src={fapdfLogo.src} height='2.5rem' />
                </Link>
                <Link href='https://finatec.org.br/' target='_blank'>
                    <Image src={finatecLogo.src} height='2.5rem' />
                </Link>
                <Link href='https://www.unb.br/' target='_blank'>
                    <Image src={unbLogo.src} height='2.5rem' />
                </Link>
                <Link href='https://nid.unb.br/' target='_blank'>
                    <Image src={knedleLogo.src} height='2.5rem' />
                </Link>
            </Flex>
        </Flex>
    )
}