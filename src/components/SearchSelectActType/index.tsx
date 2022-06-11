import { Flex, SimpleGrid, Select, Stack } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { AllTypeActs, ALL_ACTS } from "../../constants/search.constants";
import Button from "../Button";
import HeadingTwo from "../Typography/HeadingTwo";
import SmallText from "../Typography/SmallText";
import { BoxLoading } from 'react-loadingg';

export default function SearchSelectActType(){
  const [selectedAct, setSelectedAct] = useState<any>();
  const [allActs, setAllActs] = useState(ALL_ACTS);

  // <RadioButtonGroup
  // onChange={(event) => { 
  //   setStyle(prevStyle => ({
  //       ...prevStyle,
  //       font: { ...prevStyle.font, align: event.target.value }
  //   }));
  //   console.log(style);
  // }}
// />

  const handleActiveButton = useCallback((recentStatus: any) => {
    if(!!selectedAct && !!recentStatus){
      setAllActs(prevStyle => ({...prevStyle, [selectedAct]: {
        ...prevStyle[selectedAct], [recentStatus]: {
          ...prevStyle[selectedAct][recentStatus], status: !allActs[selectedAct][recentStatus]?.status}
        }
      }
    ))
    }
}, [selectedAct, allActs]);

useEffect(() => {
  console.log(allActs);
}, [allActs])

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
          <SmallText mb='1rem' smallText={
            !!selectedAct 
            ? "Selecione os campos que deseja filtrar." 
            : "Escolha um tipo de ato para ativar a opção de filtro."} 
          />
          {!!selectedAct 
          ? <SimpleGrid columns={2} spacing={2} flexDirection='row' alignItems="flex-start">
            {Object.keys(allActs[selectedAct]).map(function(key) {
                return <Button active={allActs[selectedAct][key]?.status} onClick={() => handleActiveButton(key)} key={key} buttonText={allActs[selectedAct][key]?.label}/>
              })}
            </SimpleGrid>
          : <BoxLoading speed="1.5" color="#99A8F4" style={{alignSelf: 'center', transform:'scale(2.3)', marginTop: '2.5rem'}}/>}
        </Flex>
      </Stack> 
  )
}