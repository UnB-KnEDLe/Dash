import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiArchiveLine, RiSearchLine, RiDatabase2Line } from "react-icons/ri";

import { FcTimeline } from "react-icons/fc";

export function Sidebar() {
  return (
    <Box as="aside" w="64">
      <Stack spacing="12" align="flex-start">
        <Link
          href="/knedash"
          mt="33px"
          fontSize='3xl'
          fontWeight='bold'
          letterSpacing='tight'
          color="pallete.primary"
          _hover={{textDecoration: "none"}}
        > 
          knedash
          <Text as="span" ml='0.5' color="pallete.secondary">.</Text>
        </Link>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link href="/knedash/search" display="flex" alignItems="center">
              <Icon as={RiSearchLine} fontSize={22}/>
              <Text ml="4" fontWeight="medium">Pesquisar</Text>
            </Link>
            <Link href="/knedash/extract" display="flex" alignItems="center">
              <Icon as={RiArchiveLine} fontSize={22}/>
              <Text ml="4" fontWeight="medium">Extrair</Text>
            </Link>
            <Link href="/knedash/query" display="flex" alignItems="center">
              <Icon as={RiDatabase2Line} fontSize={22}/>
              <Text ml="4" fontWeight="medium">Consultar</Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">TIMELINE</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link href="http://164.41.76.30/timeline" display="flex" alignItems="center">
              <Icon as={FcTimeline} fontSize={22} filter="grayscale(100%)" color="gray.400"/>
              <Text ml="4" fontWeight="medium">Contratos</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}