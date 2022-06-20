import { Flex } from '@chakra-ui/react';
import SmallText from "../Typography/SmallText";

interface DividerProps {
  text: string; 
}

export function Divider({ text } : DividerProps) {
  return (
    <Flex margin="1.25rem 0" alignItems="center">
      <Flex ml="" h="0.5px" w="100%" bgColor="pallete.secondary"/>
      <SmallText fontSize="14px" margin="0 1rem" color="pallete.secondary" smallText={text}/>
      <Flex h="0.5px" w="100%" bgColor="pallete.secondary"/>
    </Flex>
  )
}