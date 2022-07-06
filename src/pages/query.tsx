import { Flex, Box } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import HeadingTwo from "../components/Typography/HeadingTwo";
import SmallText from "../components/Typography/SmallText";
import { Input } from "../components/Input";
import Button from "../components/Button";
import GraphContainer from "../components/GraphContainer";
import { SiNeo4J } from "react-icons/si";

export default function Query(){
  return(
    <Flex direction="column" h="100vh">
      <Flex direction="row" w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Flex direction="column" w="100%">
            <Header 
              title="Consulta"
              description="Crie consultas na ferramenta."
            />
            <Box
              as='div'
              padding='2rem'
              borderRadius='0.25rem'
              bgColor='pallete.cardBackground'
              flexDirection='column'
              h='auto'
            >
              <HeadingTwo headingTwoText="Query" />
              <SmallText mb="1rem" smallText="Escreva sua query." />
              <Input 
                key={"query"} 
                name={""} 
                label={""} 
                placeholder={""} 
                type='text' 
                icon={SiNeo4J}
              />
              <Flex direction={"row"} justify="center">
                <Button buttonText='Consultar' marginTop="1rem"/>
              </Flex>
            </Box>
            <GraphContainer cypher="match p=(Pessoa)-[r]->() return p limit 10"/>
        </Flex>
      </Flex>
    </Flex>
  )
}