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
import { useUser, Status } from '../hooks/user';
import { AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import QueryHistory from '../components/QueryHistory';

export default function Query() {
  const { connectStatus, user, logout, cypher, handleCypher } = useUser();
  const { register, handleSubmit } = useForm();

  const onHandleCypher = useCallback( values => {
    const {query} = values;
    if(!query) return;
    handleCypher(query)
  }, []);

  return (
    <Flex direction="column" h="100vh">
      <Flex direction="row" w="100%" my="6" maxWidth={1400} mx="auto" px="12">
        <Sidebar />
        <SimpleGrid
          columns={1}
          w="100%"
          gridTemplateRows="auto auto calc(100% - 19rem)"
          alignContent="baseline"
          minHeight="100vh"
          h="100vh"
          pb="1rem"
        >
          <Header title="Consulta" description="Crie consultas na ferramenta." />
          <Flex flex="1" gap="4" mb="1rem" alignItems="flex-start">
            {connectStatus === Status.Connected && (
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
              {connectStatus === Status.Connected ? (
                <Flex as="form" onSubmit={handleSubmit(onHandleCypher)} gap="1rem" direction="column">
                  <SmallText smallText="Escreva sua consulta." />
                  <Flex gap='1rem' alignItems='center'>
                    <QueryHistory />
                    <Input
                      key={'query'}
                      name=''
                      label=''
                      placeholder=''
                      type="text"
                      icon={SiNeo4J}
                      {...register('query')}
                    />
                    <Button type="submit" buttonText="Consultar" />
                  </Flex>
                </Flex>
              ) : (
                <SmallText smallText="Realize o login para fazer uma consulta." />
              )}
            </Box>
          </Flex>
          <GraphContainer />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
