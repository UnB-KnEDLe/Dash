import { Sidebar } from "../components/Sidebar";
import Header from "../components/Header";
import { Flex } from "@chakra-ui/react";
import Button from "../components/Button";

export default function Search(){
  return(
    <Flex
      w='100vw'
      h='100vh'
    >  
      <Sidebar />
      <Flex
        w='100%'
        h='100%'
        padding='6.25rem'
      >
        <Header
            title="Pesquisar"
            description="Pesquise por informações sobre os mais diversos atos."
        />
        <Button buttonText="Entrar"/>
      </Flex>
      
    </Flex>
  )
}