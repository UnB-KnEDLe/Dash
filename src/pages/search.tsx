import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react';
import { Header } from "../components/Header";
import SearchSelectActType from '../components/SearchSelectActType';
import SearchSetInput from '../components/SearchSetInput';
import { Sidebar } from "../components/Sidebar";



export default function Search(){

  return(
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box
            as='div'
            padding='2rem'
            borderRadius='0.25rem'
            bgColor='pallete.cardBackground'
            flexDirection='column'
            height="435px"
          >
            <SearchSelectActType />
          </Box>
          <Box
            flex={1}
            padding='3rem'
            height="394px"
            h="100%"
            borderRadius='0.25rem'
            bgColor='pallete.cardBackground'
            flexDirection='column'
          >
            <SearchSetInput />
          </Box>

        </SimpleGrid>
      </Flex>
    </Flex>
  )
}