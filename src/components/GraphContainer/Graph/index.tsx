import { useCallback, useLayoutEffect, useRef } from 'react';
import { Flex, useToast } from '@chakra-ui/react';
import NeoVis, { NeoVisEvents } from 'neovis.js';
import { useUser } from '../../../hooks/user';
import Config from './config';

interface GraphProps {
  cypher: string;
}

function Graph({ cypher }: GraphProps) {
  const visRef = useRef<HTMLDivElement>();
  const { setPopupContent, closePopup, setCompleted, completed } = useUser();
  const { user} = useUser();
  const toast = useToast();

  const handleClick = useCallback((data: any) => {
    setPopupContent({
      title: data?.raw?.type || data?.raw?.labels[0],
      properties: data?.raw?.properties
    });
  }, []);

  const handleCompleted = useCallback(() => {
    setCompleted(true);
  }, []);

  useLayoutEffect(() => {
    const config = Config(visRef, user, cypher);

    let vis = new NeoVis(config);

    vis.render();

    vis.registerOnEvent(NeoVisEvents.ClickNodeEvent, (data) => handleClick(data.node));
    vis.registerOnEvent(NeoVisEvents.ClickEdgeEvent, (data) => handleClick(data.edge));
    vis.registerOnEvent(NeoVisEvents.CompletionEvent, (data) => {
      if(!data.recordCount) {
        toast({
          title: 'Sua consulta não retornou resultados.',
          status: 'info',
          duration: 9000,
          isClosable: true,
        })
      }
      console.log(vis);
      vis.network.on("afterDrawing", handleCompleted);
    });
    vis.registerOnEvent(NeoVisEvents.ErrorEvent, () => closePopup());

  }, [cypher, completed]);

  return <Flex ref={visRef} id="viz" w="100%" />;
}

export default Graph;
