import { Flex, Box, SimpleGrid } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import HeadingTwo from "../components/Typography/HeadingTwo";
import SmallText from "../components/Typography/SmallText";
import { Input } from "../components/Input";
import Button from "../components/Button";
import GraphContainer from "../components/GraphContainer";
import { SiNeo4J } from "react-icons/si";
import { useUser } from '../hooks/user';
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";

export default function Query(){
  const { isLoggedIn, user, logout } = useUser();
  const [cypher, setCypher] = useState('match p=(Pessoa)-[r]->() return p limit 10');

  return(
    <Flex direction="column" h="100vh">
      <Flex direction="row" w="100%" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid columns={1} w="100%" h='100vh' pb='1rem'>
            <Header 
              title="Consulta"
              description="Crie consultas na ferramenta."
            />
            <Flex flex="1" gap="4" mb='1rem' alignItems="flex-start">
              { isLoggedIn && (
                <Box
                  as='div'
                  padding='2rem'
                  borderRadius='0.25rem'
                  bgColor='pallete.cardBackground'
                  flexDirection='column'
                  maxWidth='15rem'
                  h="100%"
                  justifyContent='center'
                  alignItems='stretch'
                  flex="1"
                  gap='1rem'
                >
                  <HeadingTwo headingTwoText='Usuário' />
                  <Flex
                    align='center'
                    gap='1rem'
                    direction='column'
                  >
                    <Flex gap='.5rem'>
                      <AiOutlineUser size='1.25rem' />
                      <SmallText smallText={user?.username} />
                    </Flex>
                    <Flex justify="center">
                      <Button
                        icon={AiOutlineLogout}
                        buttonText={'Sair'}
                        onClick={logout}
                      />
                    </Flex>
                  </Flex>
                </Box>
              )}
              <Box
                as='div'
                padding='2rem'
                borderRadius='0.25rem'
                bgColor='pallete.cardBackground'
                flexDirection='column'
                h='100%'
                flex="1"
                gap='1rem'
              >
                <HeadingTwo headingTwoText="Consulta" />
                { !isLoggedIn ? (
                  <SmallText smallText="Realize o login para fazer uma consulta." />
                ) : (
                  <Flex gap='1rem' direction='column'>
                    <SmallText smallText="Escreva sua consulta." />
                    <Input 
                      key={"query"} 
                      name={""} 
                      label={""} 
                      placeholder={'match p=(Pessoa)-[r]->() return p limit 10'} 
                      type='text' 
                      icon={SiNeo4J}
                      value={cypher}
                      onChange={(e) => setCypher(e.target.value)}
                    />
                    <Flex justify="center">
                      <Button buttonText='Consultar' onClick={(e) => setCypher(cypher)} marginTop="1rem"/>
                    </Flex>
                  </Flex>
                )}
              </Box>
            </Flex>
            <GraphContainer cypher={cypher}/>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}