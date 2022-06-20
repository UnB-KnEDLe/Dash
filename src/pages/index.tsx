import { Flex, Text, Image } from '@chakra-ui/react';
import Button from '../components/Button';
import HomeMenu from '../components/HomeMenu';

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
          paddingBlockStart='4rem'
        >
          <Flex
            width='50%'
            height='100%'
          />
          <Flex
            direction="column"
            justifyContent="space-between"
            alignItems='stretch'
            width='50%'
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
              active={true}
              alignSelf="flex-end"
              buttonText="Começar"
            />
          </Flex>
        </Flex>
        <Flex justifyContent='center' gap='4rem'>
          <Image />
          <Image />
          <Image />
        </Flex>
      </Flex>
    </Flex>
  )
}
