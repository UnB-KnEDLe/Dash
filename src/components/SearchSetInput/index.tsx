import { Flex, Stack, Icon, chakra, keyframes } from '@chakra-ui/react';
import Button from '../Button';
import { Input } from '../Input';
import HeadingTwo from '../Typography/HeadingTwo';
import SmallText from '../Typography/SmallText';
import NotFound from '../../assets/not-refund.svg';
import { motion, isValidMotionProp } from 'framer-motion';
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { useEffect, useState, useCallback } from 'react';

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0)}
  25% { transform: scale(1.1) rotate(0)}
  50% { transform: scale(1.1) rotate(5deg)}
  75% { transform: scale(1) rotate(0deg)}
  100% { transform: scale(1) rotate(0) }
`;

interface SearchSetInputProps {
  showInputElements: string[];
}

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

export default function SearchSetInput({ showInputElements }: SearchSetInputProps) {
  const [ active, setActive ] = useState(false);

  useEffect(() => {
    console.log(showInputElements);
  }, [showInputElements]);

  const handleSubmit = useCallback(() => {
    setActive(true);
  }, []);

  return (
    <Stack spacing="1rem">
      <Flex flexDirection="column">
        <HeadingTwo headingTwoText="Campos." />
        <SmallText
          mb="2rem"
          smallText={
            showInputElements?.length
              ? 'Insira os dados dos campos escolhidos'
              : 'Não existem campos a serem preenchidos.'
          }
        />
      </Flex>
      {showInputElements?.length ? (
        <Stack>
          {showInputElements.map(function(label) {
            return <Input name={label} label={label} placeholder={label} type='text' icon={null}/>
          })}
          <Flex justify="flex-end">
            <Button buttonText='Pesquisar' icon={FaSearch} active={active} width="100" mt="10" onClick={handleSubmit}/>
          </Flex>
        </Stack>)
       : (
        <Flex as={motion.div} flex="1" direction="column" animation={animation} align="center">
          <Image src={NotFound} alt="Not-Found" width="200" height="200" />
        </Flex>
      )}
    </Stack>
  );
}
