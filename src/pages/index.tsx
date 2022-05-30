import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react';
import { Sidebar } from '../components/Sidebar';

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align='center'
    >
      <Sidebar/>
    </Flex>
  )
}
