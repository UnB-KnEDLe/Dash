import { Dispatch, SetStateAction, useLayoutEffect, useRef } from 'react';
import { Flex, useToast } from '@chakra-ui/react';
import { PopupContentType } from "../GraphPopup";
import NeoVis, { NeoVisEvents } from 'neovis.js';
import { useUser } from '../../../hooks/user';
import Config from './config';

interface GraphProps {
  cypher: string;
  setPopupContent : Dispatch<SetStateAction<PopupContentType>>;
  setOpenPopup : Dispatch<SetStateAction<boolean>>;
}

function Graph({ cypher, setPopupContent, setOpenPopup }: GraphProps) {
  const visRef = useRef<HTMLDivElement>();
  const { user} = useUser();
  const toast = useToast();

  const handleClick = (data: any) => {
    setPopupContent({
      title: data?.raw?.type || data?.raw?.labels[0],
      properties: data?.raw?.properties
    });
    setOpenPopup(true);
  };

  useLayoutEffect(() => {
    const config = Config(visRef, user, cypher);

    let vis = new NeoVis(config);

    vis.render();

    vis.registerOnEvent(NeoVisEvents.ClickNodeEvent, (data) => handleClick(data.node));
    vis.registerOnEvent(NeoVisEvents.ClickEdgeEvent, (data) => handleClick(data.edge));
    vis.registerOnEvent(NeoVisEvents.CompletionEvent, (data) => {
      if(data.recordCount === 0) {
        toast({
          title: 'Sua consulta não retornou resultados.',
          status: 'info',
          duration: 9000,
          isClosable: true,
        })
      }
    });
    vis.registerOnEvent(NeoVisEvents.ErrorEvent, (data) => console.log(data));

  }, [cypher]);

  return <Flex ref={visRef} id="viz" w="100%" />;
}

export default Graph;
