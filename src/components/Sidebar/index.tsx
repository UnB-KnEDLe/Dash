import { useState } from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { SidebarIcon, IconKey } from './SidebarIcon';

import Logo from '../../assets/logo_miner_obj.png.png';

const dashItems: IconKey[] = ['search', 'extraction', 'query', 'timeline']

export function Sidebar(){
  const [selected, setSelected] = useState<IconKey>('search');

  return(
    <Flex
      as='div'
      w='20'
      h='100vh'
      direction='column'
      align='center'
      background="pallete.secondaryLight100"
    >
    <Image
      src={Logo.src}
      w='50%'
      paddingBlock="12"
    />
    { dashItems.map( (item, index) => (
      <SidebarIcon
        key={index}
        item={item}
        selected={selected === item}
        onClick={setSelected}
      />
    )) }
  </Flex>
  )
}