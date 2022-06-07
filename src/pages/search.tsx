import { Sidebar } from "../components/Sidebar";
import { Input } from "../components/Input";
import Header from "../components/Header";
import { Flex } from "@chakra-ui/react";
import Button from "../components/Button";
import { RiSearchLine } from 'react-icons/ri'; 


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
        <Input
          icon={RiSearchLine}
          type="password"
          name="password"
          label="Email"
          placeholder="Ex: john@example.com"
        />
      </Flex>
      
    </Flex>
  )
}