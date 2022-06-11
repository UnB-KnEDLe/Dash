import { Flex, Stack, Icon , chakra, keyframes} from "@chakra-ui/react";
import Button from "../Button";
import HeadingTwo from "../Typography/HeadingTwo";
import SmallText from "../Typography/SmallText";
import NotFound from "../../assets/not-refund.svg";
import { motion, isValidMotionProp } from 'framer-motion'
import Image from 'next/image';

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0)}
  25% { transform: scale(1.1) rotate(0)}
  50% { transform: scale(1.1) rotate(5deg)}
  75% { transform: scale(1) rotate(0deg)}
  100% { transform: scale(1) rotate(0) }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

export default function SearchSetInput(){
  return(
    <Stack spacing='1rem'>
      <Flex
        flexDirection='column'

      >
        <HeadingTwo headingTwoText="Campos."/>
        <SmallText mb='2.5rem' smallText="Não existem campos a serem preenchidos." />
          
      </Flex>
      <Flex
        as={motion.div}
        flex="1"
        direction="column"
        animation={animation}
        align="center"
      >
        <Image src={NotFound} alt="Not-Found" width="200" height="200"/>
      </Flex>
        
      </Stack> 
  )
}