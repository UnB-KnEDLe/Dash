import { Box, Text } from "@chakra-ui/react";
import Image from 'next/image'
import NotFoundSVG from '../../assets/not-found-act.svg';

interface NotFoundProps {
  title: string;
  subtitle: string;
}

export function NotFound({ title, subtitle } : NotFoundProps){
  return(
    <Box borderRadius="0.35rem" color="pallete.primary" filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.10))">
       <Image
          style={{zIndex: 0}}
          src={NotFoundSVG}
          alt="Picture of the author"
        />
      <Text
        style={{ zIndex:1 }}
        color="pallete.background"
        fontWeight="600"
        left="3rem"
        top="-200px"
        position="relative"
        fontSize="32px">
          {title}
        </Text>
      <Text
        style={{ zIndex:1 }}
        color="pallete.background"
        left="3rem"
        top="-200px"
        position="relative"
        fontSize="24px">
          {subtitle}
      </Text>
    </Box> 
  )
}