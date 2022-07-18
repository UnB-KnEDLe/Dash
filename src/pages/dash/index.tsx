import { Flex, Text, Image, Divider, Link } from '@chakra-ui/react';
import Button from '../../components/Button';
import HomeMenu from '../../components/HomeMenu';

import fapdfLogo from '/src/assets/companyLogos/fapdf.png';
import finatecLogo from '/src/assets/companyLogos/finatec.svg';
import unbLogo from '/src/assets/companyLogos/unb.svg';
import frontImage from '/src/assets/homepage.png';

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
          height='82vh'
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
                Lorem Ipsum is simply dummy text of print and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </Text>
            </Flex>
            <Link
              href='/dash/search'
              alignSelf='flex-end'
            >
              <Button
                buttonText="Começar"
              />
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
