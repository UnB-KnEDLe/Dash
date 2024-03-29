import { Flex, Text } from "@chakra-ui/react";

interface HeaderProps {
  title: string;
  description: string;
}

export function Header({ title, description } : HeaderProps){
  return(
    <Flex
      as='header'
      w="100%"
      maxWidth={1480}
      h="20"
      mt="4"
      align="center"
    >
      <Text
        py="4"
        paddingRight="8"
        fontSize="3xl"
        fontWeight="bold"
        maxWidth={400}
      >
        {title}
      </Text>

      <Text
        py="4"
        px="8"
        fontSize="lg"
        fontWeight="bold"
      >
        {description}
      </Text>

    </Flex>
  )
}