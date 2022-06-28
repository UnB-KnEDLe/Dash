import { Flex, SimpleGrid, Box } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { Divider } from '../components/Divider';
import { Header } from "../components/Header";
import SearchSelectActType from '../components/SearchSelectActType';
import SearchSetInput from '../components/SearchSetInput';
import { Sidebar } from "../components/Sidebar";
import { useAct } from '../hooks/act';
import Table from '../components/Table';
import { searchTable } from '../mocks';

export default function Search(){
  const { allActsName } = useAct()
  const { heading, data } = searchTable;

  const [showInputElements, setShowInputElements] = useState([]);
  const [selectedAct, setSelectedAct] = useState<string>('');
  const [filterActs, setFilterActs] = useState([]);

  const handleSelectAct = useCallback((nameActs: string) => {
    setSelectedAct(nameActs);
  }, []) 

  const handleFilterActs = useCallback((acts: any) => {
    setFilterActs(acts);
  }, []) 

  return(
    <Flex direction="column" h="100vh">
      <Flex direction="row" w="100%" my="6" maxWidth={1480} mx="auto" px="6">
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
              >
                <SearchSelectActType handleSelectAct={handleSelectAct} selectedAct={selectedAct} allActsName={allActsName} showInputElements={showInputElements} setShowInputElements={setShowInputElements} />
              </Box>
              <Box
                flex={1}
                padding='2rem'
                borderRadius='0.25rem'
                bgColor='pallete.cardBackground'
                flexDirection='column'
                h='100%'
              >
                <SearchSetInput handleFilterActs={handleFilterActs}  selectedAct={selectedAct} showInputElements={showInputElements}/>
              </Box>

            </SimpleGrid>
            <Divider text="resultados"/>

            <Table data={data} heading={heading} filterActs={filterActs} title="Atos de Aposentadoria"/>
        </Flex>
      </Flex>
    </Flex>
  )
}