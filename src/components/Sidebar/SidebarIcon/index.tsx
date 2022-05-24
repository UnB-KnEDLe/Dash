import { Flex, Button } from '@chakra-ui/react';

interface ButtonProps {
  icon:
}

const iconTypes = {
  'search': 'search',
  'extraction': 'extraction',
  'query': 'query',
  'timeline': 'timeline'
} 

export function SidebarIcon(){
  return(
    <Button
      as='div'
      w='100%'
      maxWidth="32"
      h='100vh'
      bg="pallete.lightSecondary100"
  >

  </Button>
  )
}