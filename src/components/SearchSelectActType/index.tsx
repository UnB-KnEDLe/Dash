import { Flex, SimpleGrid, Select, Stack } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import FilterButton from "../FilterButton";
import HeadingTwo from "../Typography/HeadingTwo";
import SmallText from "../Typography/SmallText";
import { BoxLoading } from 'react-loadingg';
import { useAct } from "../../hooks/act";

interface SearchSelectActTypeProps {
  setShowInputElements: Dispatch<SetStateAction<any[]>>
  showInputElements: string[];
  allActsName: {
    [key: string]: string;
  }
  handleSelectAct: (nameActs: string) => void;
  selectedAct: string;
}

export default function SearchSelectActType({ 
  setShowInputElements, 
  showInputElements, 
  allActsName, 
  selectedAct,
  handleSelectAct  
}: SearchSelectActTypeProps){
  const { allInitialActs } = useAct();

  
  const [allActs, setAllActs] = useState<Object>(allInitialActs);


  const handleOncChange = useCallback((value: string) => {
    handleSelectAct(value);
    setAllActs(allInitialActs);
    setShowInputElements([])
  }, [allInitialActs]);

  const handleActiveButton = useCallback((recentStatus: any) => {
    
    if(!!selectedAct && !!recentStatus){
      setAllActs(prevStyle => ({...prevStyle, [selectedAct]: {
        ...prevStyle[selectedAct], [recentStatus]: {
          ...prevStyle[selectedAct][recentStatus], status: !allActs[selectedAct][recentStatus]?.status}
        }
      }
    ))
    }
    if(showInputElements.includes(allActs[selectedAct][recentStatus]?.label) === false){
      setShowInputElements([...showInputElements, allActs[selectedAct][recentStatus]?.label]);
    }
      
    else{
      setShowInputElements(showInputElements.filter(item => item !== allActs[selectedAct][recentStatus]?.label));
      
    }
      
    

}, [selectedAct, allActs, showInputElements]);

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
            onChange={e => handleOncChange(e.target.value)}
            value={selectedAct} 
            color='pallete.text' 
            bg='pallete.secondaryLight100'
            variant='filled' 
            borderStyle='none'
            placeholder='Escolha um tipo de ato'
            boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25);'
            size='lg'
          >
            {Object.entries(allActsName).map(function(actName) {
                return <option key={actName[0]} value={actName[0]}>{actName[1]}</option>
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
            {Object.keys(allActs[selectedAct]).map(key => {
                return <FilterButton active={allActs[selectedAct][key]?.status} onClick={() => handleActiveButton(key)} key={key} buttonText={allActs[selectedAct][key]?.label}/>
              })}
            </SimpleGrid>
          : <BoxLoading speed="1.5" color="#99A8F4" style={{alignSelf: 'center', transform:'scale(2.3)', marginTop: '2.5rem'}}/>}
        </Flex>
      </Stack> 
  )
}