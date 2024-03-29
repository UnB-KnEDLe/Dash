import { Flex, SimpleGrid, Select, Stack } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import FilterButton from "../FilterButton";
import HeadingTwo from "../Typography/HeadingTwo";
import SmallText from "../Typography/SmallText";
import { BoxLoading } from 'react-loadingg';
import { useAct } from "../../hooks/act";
import { CONTRACT_KEYS, PERSONAL_KEYS } from "../../constants/search.constants";

interface SearchSelectActTypeProps {
  setShowInputElements: Dispatch<SetStateAction<any[]>>;
  showInputElements: any;
  allActsName: {
    [key: string]: string;
  }
  handleLoadingResults: (value: boolean) => void;
}

export default function SearchSelectActType({  
  setShowInputElements, 
  showInputElements, 
  allActsName, 
  handleLoadingResults
}: SearchSelectActTypeProps){
  const { allInitialActs, resectAllFilterFields, selectedAct, handleSelectAct } = useAct();

  const contractActs = [];
  const personelActs = [];



  Object.entries(allActsName).forEach( ([label, value]) => {
    if (CONTRACT_KEYS.includes(label)) {
      contractActs.push([label, value]);
      return;
    } 

    else if (PERSONAL_KEYS.includes(label)) {
      personelActs.push([label, value]);
      return;
    } 
  })

  const [allActs, setAllActs] = useState<Object>(JSON.parse(JSON.stringify(allInitialActs)));

  const handleOnChange = useCallback((value: string) => {
    handleSelectAct(value);
    setAllActs(allInitialActs);
    setShowInputElements([]);
    handleLoadingResults(true);
    resectAllFilterFields();
  }, [allInitialActs, handleSelectAct, handleLoadingResults, resectAllFilterFields]);

  const handleActiveButton = useCallback(
    (recentStatus: any) => {
      if (!!selectedAct && !!recentStatus) {
        setAllActs(prevStyle => ({
          ...prevStyle,
          [selectedAct]: {
            ...prevStyle[selectedAct],
            [recentStatus]: {
              ...prevStyle[selectedAct][recentStatus],
              status: !allActs[selectedAct][recentStatus]?.status,
            },
          },
        }));
      }
      let labelShowInputElements = showInputElements.map((elem) => elem["label"]);
      if (labelShowInputElements.includes(allActs[selectedAct][recentStatus]?.label) === false) {
        setShowInputElements([...showInputElements, allActs[selectedAct][recentStatus]]);
      } else {
        setShowInputElements(showInputElements.filter(item => item["label"] !== allActs[selectedAct][recentStatus]?.label));
      }
    },
    [selectedAct, allActs, showInputElements],
  );

  return (
    <Stack spacing="2rem" pb="2.5rem" flex={1}>
      <Flex flexDirection="column">
        <HeadingTwo headingTwoText="Selecione o tipo de ato." />
        <SmallText mb="1rem" smallText="Selecione um tipo de ato de sua escolha." />
        <Select
          _hover={{ bg: 'pallete.primaryLight50' }}
          borderRadius="0.25rem"
          fontWeight="500"
          onChange={e => handleOnChange(e.target.value)}
          value={selectedAct}
          color="pallete.text"
          bg="pallete.secondaryLight100"
          variant="filled"
          borderStyle="none"
          placeholder="Escolha um tipo de ato"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
          size="lg"
        >
          <optgroup label="Atos de Contrato">
            {contractActs.map((actName) => (
                <option key={actName[0]} value={actName[0]}>
                  {actName[1]}
                </option>
              )
            )}
          </optgroup>
          <optgroup label="Atos de Pessoal">
            {personelActs.map((actName) => (
                <option key={actName[0]} value={actName[0]}>
                  {actName[1]}
                </option>
              )
            )}
          </optgroup>
        </Select>
      </Flex>
      <Flex flexDirection="column">
        <HeadingTwo headingTwoText="Filtros" />
        <SmallText
          mb="1rem"
          smallText={
            !!selectedAct
              ? 'Selecione os campos que deseja filtrar.'
              : 'Escolha um tipo de ato para ativar a opção de filtro.'
          }
        />
        {!!selectedAct ? (
          <SimpleGrid columns={2} spacing={2} flexDirection="row" alignItems="flex-start">
            {!!allActs[selectedAct] && Object?.keys(allActs[selectedAct]).map(key => (
              <FilterButton
                active={allActs[selectedAct][key]?.status}
                onClick={() => handleActiveButton(key)}
                key={key}
                buttonText={allActs[selectedAct][key]?.label}
              />
            ))}
          </SimpleGrid>
        ) : (
          <BoxLoading
            speed="1.5"
            color="#99A8F4"
            style={{ alignSelf: 'center', transform: 'scale(2.3)', marginTop: '2.5rem' }}
          />
        )}
      </Flex>
    </Stack>
  );
}
