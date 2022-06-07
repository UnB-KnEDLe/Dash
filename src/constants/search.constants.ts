import { IconType } from "react-icons";
import { AiFillDatabase } from "react-icons/ai";
import { HiDocumentSearch } from "react-icons/hi";
import { IoDocumentAttachSharp } from "react-icons/io5";



export type IconProps = 'extraction' | 'query' | 'search';

export interface TypeProps {
  label: string;
  key: number;
  icon: IconType;
}

interface IconTypeProps {
  [key: string]: TypeProps;
}

export const SIDEBAR_ICON_TYPES: IconTypeProps = {
  search: {
    label: 'search',
    key: 1,
    icon: HiDocumentSearch,
  },
  extraction: {
    label: 'extraction',
    key: 2,
    icon: IoDocumentAttachSharp,
  },
  query: {
    label: 'query',
    key: 3,
    icon: AiFillDatabase,
  }
}