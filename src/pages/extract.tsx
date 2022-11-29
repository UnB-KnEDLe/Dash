import { Flex, SimpleGrid, Box, SlideFade } from '@chakra-ui/react';
import { Divider } from '../components/Divider';
import { Header } from '../components/Header';
import ExtractSelectFile from '../components/ExtractSelectFile';
import { Sidebar } from '../components/Sidebar';
import ExtractFileManager from '../components/ExtractFileManager';
import ExtractActTypeSelect from '../components/ExtractActTypeSelect';
import TableExtract from '../components/TableExtract';
import { useExtract } from '../hooks/extract';
import { NotFound } from '../components/NotFound';
import { useEffect, useState } from 'react';

export default function Extract() {
  const { loadingFile, selectedExtractAct, filesUploaded } = useExtract();
  const [finishUpload, setFinishUpload] = useState(false);
  const [finishSelectTypeAct, setFinishSelectTypeAct] = useState(false);

  useEffect(() => {
    if(loadingFile === 100){
      setFinishSelectTypeAct(true);
    }
  }, [loadingFile])

  useEffect(() => {
    if(filesUploaded.length !== 0) setFinishUpload(true);
  }, [filesUploaded])
  
  return (
    <Flex direction="column" h="100vh">
      <Flex direction="row" w="100%" my="6" maxWidth={1400} mx="auto" px="12">
        <Sidebar />
        <Flex direction="column" w="100%">
          <Header title="Extrair" description="Extraia atos de um documento em PDF ou JSON" />
          <SimpleGrid flex="1" gap="4" minChildWidth="20rem" alignItems="flex-start">
            <Box
              as="div"
              padding="2rem"
              borderRadius="0.25rem"
              bgColor="pallete.cardBackground"
              flexDirection="column"
              h="100%"
            >
							<ExtractSelectFile />
						</Box>

            <SlideFade style={{transitionDuration: "1.6s", height: "100%"}} in={finishUpload} offsetY='20px'>
              <Box
                flex={1}
                padding="2rem"
                borderRadius="0.25rem"
                bgColor="pallete.cardBackground"
                flexDirection="column"
                h="100%"
              >
                <ExtractFileManager />
              </Box>
            </SlideFade>

                <SlideFade style={{transitionDuration: "1.6s", height: "100%"}} in={finishSelectTypeAct} offsetY='20px'>
                <Box
                  flex={1}
                  padding="2rem"
                  borderRadius="0.25rem"
                  bgColor="pallete.cardBackground"
                  flexDirection="column"
                  h="100%"
                >
                  <ExtractActTypeSelect />
                </Box>
              </SlideFade>
          </SimpleGrid>

          <Divider text="resultados" />
          { loadingFile !== 100 || selectedExtractAct.length === 0
            ? <NotFound
                title={"Atos não foram encontrados"} 
                subtitle={"Adicione um arquivo e deixe o resto com a gente"}
              />
            : <Box width={1090}><TableExtract title='Atos Extraídos'/></Box>
          }
        </Flex>
      </Flex>
    </Flex>
  );
}
