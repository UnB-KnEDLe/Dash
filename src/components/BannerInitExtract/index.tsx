import { Box, Text } from "@chakra-ui/react";
import Image from 'next/image'
import ExtractInit from '../../assets/extract-init.svg';

interface BannerInitExtractProps {
  title: string;
  subtitle: string;
}

export function BannerInitExtract({ title, subtitle } : BannerInitExtractProps){
  return(
    <Box borderRadius="0.35rem" color="pallete.primary" filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.10))">
       <Image
          style={{zIndex: 0}}
          src={ExtractInit}
          alt="Picture of the author"
        />
      <Text
        style={{ zIndex:1 }}
        color="pallete.background"
        fontWeight="600"
        left="3rem"
        top="40px"
        position="absolute"
        fontSize="32px">
          {title}
        </Text>
      <Text
        style={{ zIndex:1 }}
        color="pallete.background"
        left="3rem"
        top="100px"
        position="absolute"
        fontSize="24px">
          {subtitle}
      </Text>
    </Box> 
  )
}