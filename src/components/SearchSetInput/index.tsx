import { Flex, Stack, keyframes, SimpleGrid } from '@chakra-ui/react';
import { Input } from '../Input';
import { useForm } from 'react-hook-form';
import HeadingTwo from '../Typography/HeadingTwo';
import SmallText from '../Typography/SmallText';
import NotFound from '../../assets/not-found-field.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { useCallback, useEffect } from 'react';
import { RiMarkPenLine } from "react-icons/ri";
import Button from '../Button';
import { useAct } from '../../hooks/act';
import { BOTTOM_SEARCH, FIELDS } from '../../constants/search.constants';

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0)}
  25% { transform: scale(1.1) rotate(0)}
  50% { transform: scale(1.1) rotate(5deg)}
  75% { transform: scale(1) rotate(0deg)}
  100% { transform: scale(1) rotate(0) }
`;

interface SearchSetInputProps {
  showInputElements: string[];
  handleLoadingResults: (value: boolean) => void;
}

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

export default function SearchSetInput({ showInputElements, handleLoadingResults }: SearchSetInputProps) {
  const { register, handleSubmit, reset } = useForm();
  const { getFieldActs, selectedAct, handleSearchActs, resectAllFilterFields, getTotalSearchActs } = useAct();
  const fieldAct = BOTTOM_SEARCH[selectedAct]?.[showInputElements?.length]
  useEffect(() => {
    !!showInputElements && reset();
  }, [showInputElements, reset])

  const handleSearchAct = useCallback(async (values) => {
    handleLoadingResults(false);
    resectAllFilterFields();
    const labelShowInputElements = showInputElements.map(item => item["label"])
    let fieldFilled = Object.entries(values)
      .filter(field => labelShowInputElements.includes(field[0]))
      .map(item => item[0] === FIELDS[item[0]]
        ? item
        : [item[0] = FIELDS[item[0]], item[1]]);
    
    const reduceActs = fieldFilled.reduce((reduceActs, fieldAtual) => {
      reduceActs[fieldAtual[0]] = fieldAtual[1]
      return reduceActs;
  },{})
    const fieldActs: any = await getFieldActs(selectedAct, {
      ...reduceActs,
    });
    handleSearchActs(fieldActs);
    handleLoadingResults(true);
  }, [handleSearchActs, selectedAct, showInputElements, getFieldActs, handleLoadingResults]);
  return (
    <Stack spacing="1rem">
      <Flex flexDirection="column">
        <HeadingTwo headingTwoText="Campos." />
        <SmallText
          mb={!!showInputElements.length ? 0 : "2rem"}
          smallText={
            !!showInputElements
              ? 'Insira os dados dos campos escolhidos.'
              : 'Não existem campos a serem preenchidos.'
          }
        />
      </Flex>

      {showInputElements?.length ? (
        <Flex as="form" onSubmit={handleSubmit(handleSearchAct)} direction="column">
          <SimpleGrid 
            columns={2} 
            spacing={2} 
            flexDirection='row' 
            alignItems="flex-start">
            {showInputElements.map((elem) => elem["label"]).map(label => (
              <Input
                hasValue={!!showInputElements}
                key={label} 
                name={label} 
                label={label} 
                placeholder={label} 
                type='text' 
                icon={RiMarkPenLine}
                {...register(label)}
              />
            ))}
          </SimpleGrid>
          <Button 
            buttonText='Pesquisar'
            type="submit"
            icon={FaSearch} 
            bottom={!!fieldAct ? fieldAct : BOTTOM_SEARCH.default[4]}
          />
        </Flex> )
        : (
        <Flex as={motion.div} flex="1" direction="column" animation={animation} align="center">
          <Image src={NotFound} color="pallete.secondary" alt="Not-Found" width="200" height="200" />
        </Flex>
      )}
    </Stack>
  );
}
