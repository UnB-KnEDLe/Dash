import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Header(){
  return(
    <Flex
      as='header'
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text
        fontSize='3xl'
        fontWeight='bold'
        letterSpacing='tight'
        w="64"
      > 
        knedash
        <Text as="span" ml='1' color="pallete.primary">.</Text>
      </Text>

      <Text
        py="4"
        px="8"
        fontSize="3xl"
        fontWeight="bold"
        maxWidth={400}
      >
        Pesquisa
      </Text>
    </Flex>
  )
}