import { Flex, SimpleGrid, Box, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import Button from '../components/Button';
import { Divider } from '../components/Divider';
import { Header } from "../components/Header";
import SearchSelectActType from '../components/SearchSelectActType';
import SearchSetInput from '../components/SearchSetInput';
import { Sidebar } from "../components/Sidebar";
import HeadingTwo from '../components/Typography/HeadingTwo';
import { RiDownload2Fill } from 'react-icons/ri';
import { Input } from '../components/Input';
import { FaSearch } from "react-icons/fa";
import { useAct } from '../hooks/act';

export default function Search(){
  const { allActsName } = useAct()

  const [showInputElements, setShowInputElements] = useState<string[]>([]);
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
            <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
              <Box
                as='div'
                padding='2rem'
                borderRadius='0.25rem'
                bgColor='pallete.cardBackground'
                flexDirection='column'
                height="455px"
              >
                <SearchSelectActType handleSelectAct={handleSelectAct} selectedAct={selectedAct} allActsName={allActsName} showInputElements={showInputElements} setShowInputElements={setShowInputElements} />
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
                <SearchSetInput handleFilterActs={handleFilterActs}  selectedAct={selectedAct} showInputElements={showInputElements}/>
              </Box>

            </SimpleGrid>
            <Divider text="resultados"/>

            <Box bgColor="pallete.cardBackground" borderRadius='0.25rem' padding="3rem"> 
            <Flex justify="space-between" width="100%" direction="row">
              <Flex width="100%">
                <HeadingTwo marginBottom="1.5rem" mr="1rem" headingTwoText='Atos de Aposentadoria'/>
                <Button icon={RiDownload2Fill}/>
              </Flex>
              <Input margin="0 auto" w="100%" name='table-search' placeholder='Ex: Joao da Silva' type='text' icon={FaSearch} />
            </Flex>
    
              <Box
                bgColor="pallete.cardBackground"
                border="1px solid" 
                borderColor="pallete.secondary" 
                borderRadius="md"
              >
                <Table variant="striped" colorScheme="facebook">
                  <Thead bgColor="pallete.secondary">
                    <Tr>
                      <Th fontWeight="bold" color="pallete.background" px="4px" maxWidth="80px" pl="28px">SEI</Th>
                      <Th fontWeight="bold" color="pallete.background" px="4px" maxWidth="80px" pl="28px">Nome</Th>
                      <Th fontWeight="bold" color="pallete.background">Matrícula</Th>
                      <Th fontWeight="bold" color="pallete.background">Órgão</Th>
                      <Th fontWeight="bold" color="pallete.background">DODF Número</Th>
                      <Th fontWeight="bold" color="pallete.background">DODF Nome</Th>
                      <Th fontWeight="bold" color="pallete.background">DATA DODF</Th>
                      <Th fontWeight="bold" color="pallete.background">Quadro</Th>
                      <Th fontWeight="bold" color="pallete.background">Padrão</Th>
                      <Th fontWeight="bold" color="pallete.background">Cargo</Th>
                      <Th fontWeight="bold" color="pallete.background">Efetivo</Th>
                      <Th fontWeight="bold" color="pallete.background">Classe</Th>
                    </Tr>
                  </Thead>
                  
                  <Tbody fontWeight="500">
                    <Tr>
                      <Td pl="28px"px="4px" maxWidth="80px">060.00047003/2017-40</Td>
                      <Td pl="28px" px="4px" maxWidth="80px">LUIZ SERGIO MAGALHAES BRAGA</Td>
                      <Td></Td>
                      <Td></Td>
                      <Td>001</Td>
                      <Td>DODF 001 02-01-2018.pdf</Td>
                      <Td>02/01/2018</Td>
                      <Td>Quadro de Pessoal da Secretaria de Estado de Saude do Distrito Federal'</Td>
                      <Td>Padrao IV', 'Padrao V</Td>
                      <Td>Medico Cirurgia Geral' 'Tecnico em Saude</Td>
                      <Td></Td>
                      <Td>Classe Especial'</Td>
                    </Tr>
                    <Tr>
                      <Td pl="28px" px="4px" maxWidth="80px">060.00047003/2017-40</Td>
                      <Td pl="28px" px="4px" maxWidth="80px">LUIZ SERGIO MAGALHAES BRAGA</Td>
                      <Td></Td>
                      <Td></Td>
                      <Td>001</Td>
                      <Td>DODF 001 02-01-2018.pdf</Td>
                      <Td>02/01/2018</Td>
                      <Td>Quadro de Pessoal da Secretaria de Estado de Saude do Distrito Federal'</Td>
                      <Td>Padrao IV', 'Padrao V</Td>
                      <Td>Medico Cirurgia Geral' 'Tecnico em Saude</Td>
                      <Td></Td>
                      <Td>Classe Especial'</Td>
                    </Tr>
                    <Tr>
                      <Td pl="28px" px="4px" maxWidth="80px">060.00047003/2017-40</Td>
                      <Td pl="28px" px="4px" maxWidth="80px">LUIZ SERGIO MAGALHAES BRAGA</Td>
                      <Td></Td>
                      <Td></Td>
                      <Td>001</Td>
                      <Td>DODF 001 02-01-2018.pdf</Td>
                      <Td>02/01/2018</Td>
                      <Td>Quadro de Pessoal da Secretaria de Estado de Saude do Distrito Federal'</Td>
                      <Td>Padrao IV', 'Padrao V</Td>
                      <Td>Medico Cirurgia Geral' 'Tecnico em Saude</Td>
                      <Td></Td>
                      <Td>Classe Especial'</Td>
                    </Tr>
                    <Tr>
                      <Td pl="28px" px="4px" maxWidth="80px">060.00047003/2017-40</Td>
                      <Td pl="28px" px="4px" maxWidth="80px">LUIZ SERGIO MAGALHAES BRAGA</Td>
                      <Td></Td>
                      <Td></Td>
                      <Td>001</Td>
                      <Td>DODF 001 02-01-2018.pdf</Td>
                      <Td>02/01/2018</Td>
                      <Td>Quadro de Pessoal da Secretaria de Estado de Saude do Distrito Federal'</Td>
                      <Td>Padrao IV', 'Padrao V</Td>
                      <Td>Medico Cirurgia Geral' 'Tecnico em Saude</Td>
                      <Td></Td>
                      <Td>Classe Especial'</Td>
                    </Tr>
                  </Tbody>
                  
                </Table>
              </Box>
            </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}