import { Flex, SimpleGrid, Box } from '@chakra-ui/react';
import { Divider } from '../components/Divider';
import { Header } from '../components/Header';
import ExtractSelectFile from '../components/ExtractSelectFile';
import { Sidebar } from '../components/Sidebar';
import ExtractFileManager from '../components/ExtractFileManager';
import ExtractActTypeSelect from '../components/ExtractActTypeSelect';

const fileList = [{name: "arquivo1.pdf", id:"1", viewState:true}, {name: "arquivo2.pdf", id:"2", viewState:true}, {name: "arquivo3.pdf", id:"3", viewState: false}];
const actTypeList = [["Tipo 1", "1"], ["Tipo 2", "2"], ["Tipo 3", "3"],];

export default function Extract() {
  return (
    <Flex direction="column" h="100vh">
      <Flex direction="row" w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Flex direction="column" w="100%">
          <Header title="Extração" description="Extraia atos de um documento em PDF" />
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
						<Box
              flex={1}
              padding="2rem"
              borderRadius="0.25rem"
              bgColor="pallete.cardBackground"
              flexDirection="column"
              h="100%"
            >
							<ExtractActTypeSelect
								actsTypes={actTypeList}
								selectedAct={actTypeList[0][0]}
							/>
						</Box>
          </SimpleGrid>
          <Divider text="resultados" />

        </Flex>
      </Flex>
    </Flex>
  );
}
