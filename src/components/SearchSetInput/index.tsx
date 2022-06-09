import { Flex, Select, Stack } from "@chakra-ui/react";
import Button from "../Button";
import HeadingTwo from "../Typography/HeadingTwo";
import SmallText from "../Typography/SmallText";



export default function SearchSetInput(){
  return(
    <Stack spacing='2rem'>
      <Flex
        flexDirection='column'
      >
          <HeadingTwo headingTwoText="Campos."/>
          <SmallText mb='1rem' smallText="Insira os dados dos campos escolhidos." />
        </Flex>
      </Stack> 
  )
}