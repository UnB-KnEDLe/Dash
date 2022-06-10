import { Flex, SimpleGrid, Select, Stack, Text, Icon } from "@chakra-ui/react";
import { useCallback, useState, FormEvent, useEffect } from "react";
import { AllTypeActs, RETIREMENT_ACT_FILTER, ALL_ACTS } from "../../constants/search.constants";
import { useAct } from "../../hooks/act";
import Button from "../Button";
import HeadingTwo from "../Typography/HeadingTwo";
import SmallText from "../Typography/SmallText";
import { BoxLoading } from 'react-loadingg';

export default function SearchSelectActType(){
  const [selectedAct, setSelectedAct] = useState('');

  return(
    <Stack spacing='2rem' flex={1}>
      <Flex
        flexDirection='column'
      >
          <HeadingTwo headingTwoText="Selecione o tipo de ato."/>
          <SmallText mb='1rem' smallText="Selecione um tipo de ato de sua escolha." />
          <Select 
            _hover={{bg:'pallete.primaryLight50'}}
            borderRadius='0.25rem'
            fontWeight='500'
            onChange={e => setSelectedAct(e.target.value)}
            value={selectedAct} 
            color='pallete.text' 
            bg='pallete.secondaryLight100'
            variant='filled' 
            borderStyle='none'
            placeholder='Escolha um tipo de ato'
            boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25);'
            size='lg'
          >
            {Object.keys(AllTypeActs).map(function(key) {
                return <option key={key} value={key}>{AllTypeActs[key]}</option>
              })}
          </Select>
        </Flex>
        <Flex
          flexDirection='column'
        >
          <HeadingTwo headingTwoText="Filtros"/>
          <SmallText mb='1rem' smallText="Selecione os campos que deseja filtrar." />
          {!!selectedAct ? <SimpleGrid columns={2} spacing={2} flexDirection='row' alignItems="flex-start">
            {Object.keys(ALL_ACTS[selectedAct]).map(function(key) {
                return <Button key={key} buttonText={ALL_ACTS[selectedAct][key]}/>
              })}
            </SimpleGrid>
          : <BoxLoading speed="1.5" color="#99A8F4" style={{alignSelf: 'center', transform:'scale(2.3)', marginTop: '2.5rem'}}/>}
        </Flex>
      </Stack> 
  )
}