import { Flex, Select, Stack } from "@chakra-ui/react";
import Button from "../Button";
import HeadingTwo from "../Typography/HeadingTwo";
import SmallText from "../Typography/SmallText";



export default function SearchSelectActType(){
  return(
    
    <Flex
      as='div'
      padding='3rem'
      borderRadius='0.25rem'
      bgColor='pallete.cardBackground'
      flexDirection='column'
    > 
    <Stack spacing='2rem'>
      <Flex
        flexDirection='column'
      >
          <HeadingTwo headingTwoText="Selecione o tipo de ato."/>
          <SmallText mb='1rem' smallText="Selecione um tipo de ato de sua escolha." />
          <Select 
            _hover={{bg:'pallete.primaryLight50'}}
            borderRadius='0.25rem'
            
            fontWeight='500' 
            color='pallete.text' 
            bg='pallete.secondaryLight100'
            variant='filled' 
            borderStyle='none'
            placeholder='Escolha um tipo de ato'
            boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25);'
            size='lg'
          >
            <option value='option1'>Aposentadoria</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Flex>
        <Flex
          flexDirection='column'
        >
          <HeadingTwo headingTwoText="Filtros"/>
          <SmallText mb='1rem' smallText="Selecione os campos que deseja filtrar." />
          <Flex gap={2}>
            <Button buttonText="Nome"/>
            <Button buttonText="Matrícula"/>
            <Button buttonText="Cargo"/>
            <Button buttonText="Orgão"/>
          </Flex>
        </Flex>
      </Stack> 
    </Flex>

  )
}