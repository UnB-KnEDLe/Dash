import { Flex, Text, Image } from '@chakra-ui/react';
import Button from '../components/Button';
import HomeMenu from '../components/HomeMenu';

import fapdfLogo from '../assets/companyLogos/fapdf.png';
import finatecLogo from '../assets/companyLogos/finatec.svg';
import unbLogo from '../assets/companyLogos/unb.svg';
import frontImage from '../assets/homepage.png';

export default function Home() {
  return (
    <Flex justifyContent="center">
      <Flex
        maxWidth="85rem"
        paddingInline='2rem'
        direction='column'
      >
        <HomeMenu />
        <hr />
        <Flex
          gap='4rem'
          height='70vh'
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
                O Diário Oficial da União de uma forma simples
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
            <Button
              buttonText="Começar"
              alignSelf="flex-end"
            />
          </Flex>
        </Flex>
        <Flex justifyContent='center' height='20vh' alignItems='center' gap='4rem'>
          <Image width='auto' height='3.5rem' src={unbLogo.src} />
          <Image width='auto' height='3.5rem' src={finatecLogo.src} />
          <Image width='auto' height='3.5rem' src={fapdfLogo.src} />
        </Flex>
      </Flex>
    </Flex>
  )
}
