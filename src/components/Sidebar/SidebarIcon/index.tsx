import { Button, Icon, Img, ButtonProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { AiFillDatabase } from 'react-icons/ai';
import { HiDocumentSearch } from 'react-icons/hi';
import { IoDocumentAttachSharp } from 'react-icons/io5';
import { IconProps, SIDEBAR_ICON_TYPES } from '../../../constants/search.constants';

interface SidebarIconProps extends ButtonProps {
  item: any;
  selectType: string;
}

export function SidebarIcon({ item, selectType, ...rest}: SidebarIconProps) {

  return(
    <Button
      display='flex'
      alignContent='center'
      cursor='pointer'
      as='div'
      w='100%'
      paddingBlock={6}
      h='4rem'
      variant='unstyled'
      {...rest}
  >
    <Icon as={SIDEBAR_ICON_TYPES[item.label].icon} 
      color={selectType === item.label && 'pallete.primary'} fontSize="36px"/>
  </Button>
  )
}