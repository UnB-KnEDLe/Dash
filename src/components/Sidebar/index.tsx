import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiArchiveLine, RiSearchLine, RiDatabase2Line } from "react-icons/ri";

import { FcTimeline } from "react-icons/fc";

export function Sidebar() {
  return (
    <Box as="aside" w="64">
      <Stack spacing="12" align="flex-start">
        <Text
          mt="33px"
          fontSize='3xl'
          fontWeight='bold'
          letterSpacing='tight'
          color="pallete.primary"
        > 
          knedash
          <Text as="span" ml='0.5' color="pallete.secondary">.</Text>
        </Text>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiSearchLine} fontSize={22}/>
              <Text ml="4" fontWeight="medium">Pesquisa</Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiArchiveLine} fontSize={22}/>
              <Text ml="4" fontWeight="medium">Extração</Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiDatabase2Line} fontSize={22}/>
              <Text ml="4" fontWeight="medium">Consulta</Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">TIMELINE</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={FcTimeline} fontSize={22} filter="grayscale(100%)" color="gray.400"/>
              <Text ml="4" fontWeight="medium">Contratos</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}