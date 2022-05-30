import { Button, Img } from '@chakra-ui/react';

import extractIcon from '../../../assets/sidebarIcons/extractionIconSVG.svg';
import queryIcon from '../../../assets/sidebarIcons/queryIconSVG.svg';
import searchIcon from '../../../assets/sidebarIcons/searchIconSVG.svg';
import timelineIcon from '../../../assets/sidebarIcons/timeline.svg';

export type IconKey = 'extraction' | 'query' | 'search' | 'timeline';

type SidebarIconProps = {
  item: IconKey;
  selected: boolean;
  onClick: (item: IconKey) => void;
}

const iconTypes = {
  'search': {
    icon: searchIcon,
    title: 'Pesquisar',
  },
  'extraction': {
    icon: extractIcon,
    title: 'Extration',
  },
  'query': {
    icon: queryIcon,
    title: 'Query',
  },
  'timeline': {
    icon: timelineIcon,
    title: 'Timeline',
  },
}

export function SidebarIcon(props: SidebarIconProps) {
  const { icon } = iconTypes[props.item];
  const { selected, onClick } = props;

  return(
    <Button
      onClick={() => onClick(props.item)}
      as='div'
      w='100%'
      paddingBlock={6}
      h='8'
      rounded='false'
      bg={selected ? "pallete.darkPrimary" : "pallete.secondaryLight100"}
      _hover={{bg: 'pallete.darkPrimary'}}
  >
    <Img maxWidth='6' src={icon.src} />
  </Button>
  )
}