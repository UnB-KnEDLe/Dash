import { useCallback, useState } from 'react';
import { Flex, IconProps, Image } from '@chakra-ui/react';
import { SidebarIcon } from './SidebarIcon';

import Logo from '../../assets/logo_miner_obj.png.png';
import { SIDEBAR_ICON_TYPES, TypeProps } from '../../constants/search.constants';

export function Sidebar(){
  const [selectType, setSelecType] = useState('search');

  const handleSelectType = useCallback((type: string) => {
    setSelecType(type)
    console.log(selectType)
  }, [selectType])
  return(
    <Flex
      as='div'
      w='20'
      h='100vh'
      direction='column'
      align='center'
      background="pallete.sidebarBackground"
    >
    <Image
      src={Logo.src}
      w='50%'
      paddingBlock="12"
    />
    {
      Object.entries(SIDEBAR_ICON_TYPES).map(
        (item) => (
          <SidebarIcon
            key={item[1].key}
            item={item[1]}
            selectType={selectType}
            onClick={() => handleSelectType(item[1].label)}
          />
        )
      )
    }
  </Flex>
  )
}