import { Flex, Text } from '@chakra-ui/react';
import { Sidebar } from '../components/Sidebar';
import Header from "../components/Header";
import Container from '../components/Container';
import Card from '../components/Card';

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align='center'
    >
      <Sidebar/>
      <Container>
        <Header
            title="Pesquisa"
            description="Pesquise por informações sobre os mais diversos atos."
        />
        <Flex justify='space-between' gap='11'>
          <Card>
            <Text fontSize='lg'>Selecione um tipo de ato</Text>
            <Text fontSize='sm'>Selecione um tipo de ato a sua escolha.</Text>
          </Card>
          <Card>
            <Text fontSize='lg'>Campos</Text>
            <Text fontSize='sm'>Insira os dados dos campos escolhidos.</Text>
          </Card>
        </Flex>
      </Container>
    </Flex>
  )
}
