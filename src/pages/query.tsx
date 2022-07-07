import { Flex, Box, SimpleGrid } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import HeadingTwo from '../components/Typography/HeadingTwo';
import SmallText from '../components/Typography/SmallText';
import { Input } from '../components/Input';
import Button from '../components/Button';
import GraphContainer from '../components/GraphContainer';
import { SiNeo4J } from 'react-icons/si';
import { useUser } from '../hooks/user';
import { AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';

export default function Query() {
  const { isLoggedIn, user, logout } = useUser();
  const [cypher, setCypher] = useState('match p=(Pessoa)-[r]->() return p limit 10');
  const [finalCypher, setFinalCypher] = useState('match p=(Pessoa)-[r]->() return p limit 10');

  const handleCypherChange = useCallback(
    e => {
      setCypher(e.target.value);
    }, [cypher],
  );

  return (
    <Flex direction="column" h="100vh">
      <Flex direction="row" w="100%" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid
          columns={1}
          w="100%"
          gridTemplateRows="6rem 13rem calc(100% - 19rem)"
          alignContent="baseline"
          minHeight="100vh"
          h="100vh"
          pb="1rem"
        >
          <Header title="Consulta" description="Crie consultas na ferramenta." />
          <Flex flex="1" gap="4" mb="1rem" alignItems="flex-start">
            {isLoggedIn && (
              <Box
                as="div"
                padding="2rem"
                borderRadius="0.25rem"
                bgColor="pallete.cardBackground"
                flexDirection="column"
                maxWidth="15rem"
                h="100%"
                justifyContent="center"
                alignItems="stretch"
                flex="1"
                gap="1rem"
              >
                <HeadingTwo headingTwoText="Usuário" />
                <Flex align="center" gap="1.5rem" direction="column">
                  <Flex gap=".5rem">
                    <AiOutlineUser size="1.25rem" />
                    <SmallText smallText={user?.username} />
                  </Flex>
                  <Flex justify="center">
                    <Button icon={AiOutlineLogout} buttonText={'Sair'} onClick={logout} />
                  </Flex>
                </Flex>
              </Box>
            )}
            <Box
              as="div"
              padding="2rem"
              borderRadius="0.25rem"
              bgColor="pallete.cardBackground"
              flexDirection="column"
              h="100%"
              flex="1"
              gap="1rem"
            >
              <HeadingTwo headingTwoText="Consulta" />
              {isLoggedIn ? (
                <Flex gap="1rem" direction="column">
                  <SmallText smallText="Escreva sua consulta." />
                  <Flex gap='1rem' alignItems='center'>
                    <Input
                      key={'query'}
                      name=''
                      label=''
                      placeholder=''
                      type="text"
                      icon={SiNeo4J}
                      value={cypher}
                      onChange={handleCypherChange}
                    />
                    <Button buttonText="Consultar" onClick={() => setFinalCypher(cypher)} />
                  </Flex>
                </Flex>
              ) : (
                <SmallText smallText="Realize o login para fazer uma consulta." />
              )}
            </Box>
          </Flex>
          <GraphContainer cypher={finalCypher} />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
