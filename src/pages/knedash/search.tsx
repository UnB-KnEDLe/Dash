import { Flex, SimpleGrid, Box, Image } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { Divider } from '../../components/Divider';
import { Header } from "../../components/Header";
import SearchSelectActType from '../../components/SearchSelectActType';
import SearchSetInput from '../../components/SearchSetInput';
import { Sidebar } from "../../components/Sidebar";
import { useAct } from '../../hooks/act';
import TableSearch from '../../components/TableSearch';
import { TouchBallLoading } from 'react-loadingg';
import { NotFound } from '../../components/NotFound';

export default function Search(){
  const { allActsName, selectedAct, searchActs } = useAct()

  const [showInputElements, setShowInputElements] = useState([]);

  const [showResults, setShowResults] = useState(true);
  
  const handleLoadingResults = useCallback((value: boolean) => {
    setShowResults(value);
  }, [])

  return(
    <Flex direction="column" h="100vh">
      <Flex direction="row" w="100%" my="6" maxWidth={1400} mx="auto" px="12">
        <Sidebar />
        <Flex direction="column" w="100%">
            <Header 
              title="Pesquisar"
              description="Pesquise por informações sobre os mais diversos atos."
            />
            <SimpleGrid flex="1" gap="4" minChildWidth="20rem" alignItems="flex-start">
              <Box
                as='div'
                padding='2rem'
                borderRadius='0.25rem'
                bgColor='pallete.cardBackground'
                flexDirection='column'
                h='100%'
                filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"
              >
                <SearchSelectActType 
                  allActsName={allActsName} 
                  showInputElements={showInputElements} 
                  setShowInputElements={setShowInputElements}
                  handleLoadingResults={handleLoadingResults} 
                />
              </Box>
              <Box
                flex={1}
                padding='2rem'
                borderRadius='0.25rem'
                bgColor='pallete.cardBackground'
                flexDirection='column'
                h='100%'
                filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"
              >
                <SearchSetInput 
                  showInputElements={showInputElements}
                  handleLoadingResults={handleLoadingResults}
                />
              </Box>

            </SimpleGrid>
            <Divider text="resultados"/>

            {searchActs.length === 0 && showResults
            ? <NotFound
                title={"Atos não foram encontrados"} 
                subtitle={"Verifique a pesquisa"}
              />
            : (showResults 
                ? <Box maxWidth={1090}><TableSearch title={`Atos de ${allActsName[selectedAct]}`}/></Box>
                : <TouchBallLoading speed="1.5" color="#99A8F4" style={{ alignSelf: 'center', transform: 'scale(2.3)', marginTop: '2.5rem' }}/>
              )
              }
        </Flex>
      </Flex>
    </Flex>
  )
}