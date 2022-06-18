import { Divider as ChakraDivider, Flex } from '@chakra-ui/react';
import SmallText from "../Typography/SmallText";

interface DividerProps {
  text: string; 
}

export function Divider({ text } : DividerProps) {
  return (
    <Flex>
      <ChakraDivider orientation='horizontal' />
      <SmallText smallText={text} color="pallete.secondary"/>
      <ChakraDivider orientation='horizontal' />
    </Flex>
  )
}