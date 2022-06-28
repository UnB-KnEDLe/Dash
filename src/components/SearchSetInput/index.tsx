import { Flex, Stack, keyframes, SimpleGrid } from '@chakra-ui/react';
import { Input } from '../Input';
import { useForm } from 'react-hook-form';
import HeadingTwo from '../Typography/HeadingTwo';
import SmallText from '../Typography/SmallText';
import NotFound from '../../assets/not-refund.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { useCallback, useState } from 'react';
import { RiMarkPenLine } from "react-icons/ri";
import Button from '../Button';
import api from '../../services/api';
import { useAct } from '../../hooks/act';

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0)}
  25% { transform: scale(1.1) rotate(0)}
  50% { transform: scale(1.1) rotate(5deg)}
  75% { transform: scale(1) rotate(0deg)}
  100% { transform: scale(1) rotate(0) }
`;

interface SearchSetInputProps {
  showInputElements: string[];
  selectedAct: string;
  handleFilterActs: (acts: any) => void;
}


const animation = `${animationKeyframes} 2s ease-in-out infinite`;

export default function SearchSetInput({ showInputElements, selectedAct, handleFilterActs }: SearchSetInputProps) {
  const { register, handleSubmit, formState } = useForm();
  const { getFieldActs } = useAct();

  

  const handleSearchAct = useCallback(async (values) => {
    // console.log(Object.entries(values).filter(field => showInputElements.includes(field[0])));
    handleFilterActs(getFieldActs(selectedAct, {
      pessoa: 'Daniel',
      per_page: 5,
      page: 1
    }))
  }, [handleFilterActs, selectedAct]);

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
            {showInputElements.map(label => {
              return <Input
                        key={label} 
                        name={label} 
                        label={label} 
                        placeholder={label} 
                        type='text' 
                        icon={RiMarkPenLine}
                        {...register(label)}
                      />
            })}
          </SimpleGrid>
          <Button 
            buttonText='Pesquisar'
            type="submit"
            icon={FaSearch} 
            bottom={showInputElements.length <= 2 ? "-181.5px" : (showInputElements.length === 5 ? "-18px" : "-100px")}
          />
        </Flex> )
       : (
        <Flex as={motion.div} flex="1" direction="column" animation={animation} align="center">
          <Image src={NotFound} alt="Not-Found" width="200" height="200" />
        </Flex>
      )}
    </Stack>
  );
}
