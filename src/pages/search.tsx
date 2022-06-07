import { Sidebar } from "../components/Sidebar";
import { Input } from "../components/Input";
import { Header } from "../components/Header";
import { Flex } from "@chakra-ui/react";
import { RiSearchLine } from 'react-icons/ri'; 
import SearchSelectActType from "../components/SearchSelectActType";


export default function Search(){
  return(
    <Flex
      as='div'
      w='100vw'
      h='100vh'
      flexDirection='column'
      padding='2.5rem'
      paddingTop='1.5rem'
    > 
      <Header title="Pesquisa" description='Pesquise por informações sobre os mais diversos atos.'/>
      <SearchSelectActType />       
    </Flex>
  )
}