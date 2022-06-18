import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Header } from "../components/Header";
import SearchSelectActType from '../components/SearchSelectActType';
import SearchSetInput from '../components/SearchSetInput';
import { Sidebar } from "../components/Sidebar";



export default function Search(){
  const [showInputElements, setShowInputElements] = useState<string[]>([]);

  return(
    <Flex direction="column" h="100vh">
      <Header 
        title="Pesquisar"
        description="Pesquise por informações sobre os mais diversos atos."
      />
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
            <SearchSelectActType showInputElements={showInputElements} setShowInputElements={setShowInputElements} />
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
            <SearchSetInput showInputElements={showInputElements}/>
          </Box>

        </SimpleGrid>
      </Flex>
    </Flex>
  )
}