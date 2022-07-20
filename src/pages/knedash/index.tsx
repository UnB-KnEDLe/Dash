import { Flex, Text, Image, Divider, Link, Button } from '@chakra-ui/react';
import HomeMenu from '../../components/HomeMenu';

import HeadingTwo from '../../components/Typography/HeadingTwo';

import fapdfLogo from '/src/assets/companyLogos/fapdf.png';
import finatecLogo from '/src/assets/companyLogos/finatec.svg';
import unbLogo from '/src/assets/companyLogos/unb.svg';
import frontImage from '/src/assets/homepage.webp';

export default function Home() {
  return (
    <Flex justifyContent="center">
      <Flex
        maxWidth="85rem"
        paddingInline='2rem'
        direction='column'
      >
        <HomeMenu />
        <Divider orientation="horizontal" />
        <Flex
          gap='4rem'
          height='73vh'
          minHeight='36rem'
          paddingBlockStart='4rem'
        >
          <Image
            src={frontImage.src}
            height='100%'
          />
          <Flex
            direction="column"
            justifyContent="space-between"
            alignItems='stretch'
          >
            <Flex direction="column" gap='3rem'>
              <Text
                color="pallete.primary"
                fontWeight="600"
                fontSize="4.5rem"
                lineHeight={1}
              >
                O Diário Oficial do Distrito Federal de uma forma simples
              </Text>
              <Text
                color="black"
                fontSize="1.5rem"
                fontWeight={500}
                lineHeight={1}
              >
                Por meio de Inteligência Artificial, o Knedash realiza consultas e de extrações de atos e entidades do Diário Oficial para o Tribunal de Contas do Distrito Federal.
              </Text>
            </Flex>
            <Link
              href='/knedash/search'
              alignSelf='flex-end'
            >
              <Button
                bgColor="transparent"
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.25)"
                borderRadius='0.125rem'
                p='6'
                display='flex'
                alignItems='center'
                _hover={{bgColor: 'pallete.cardBackground'}}
              >
                <HeadingTwo headingTwoText="Começar" />
              </Button>
            </Link>
          </Flex>
        </Flex>
        <Divider
          marginBlockStart='4rem'
          orientation="horizontal"
        />
        <Flex justifyContent='center' paddingBlock='2rem' alignItems='center' gap='4rem'>
          <Image width='auto' height='2.5rem' src={unbLogo.src} />
          <Image width='auto' height='2.5rem' src={finatecLogo.src} />
          <Image width='auto' height='2.5rem' src={fapdfLogo.src} />
        </Flex>
      </Flex>
    </Flex>
  )
}
