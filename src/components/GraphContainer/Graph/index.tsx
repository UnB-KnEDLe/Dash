import { memo, useEffect, useRef } from 'react';
import { Flex, useToast } from '@chakra-ui/react';
import NeoVis, { NeoVisEvents } from 'neovis.js';
import { useUser } from '../../../hooks/user';
import Config from './config';

interface GraphProps {
  cypher: string;
}

function GraphComponent({ cypher }: GraphProps) {
  const visRef = useRef<HTMLDivElement>();
  const { setPopupContent, closePopup } = useUser();
  const { user } = useUser();
  const toast = useToast();

  const handleClick = (data: any) => {
    setPopupContent({
      title: data?.raw?.type || data?.raw?.labels[0],
      properties: data?.raw?.properties
    });
  };

  useEffect(() => {
    const config = Config(visRef, user, cypher);

    let vis = new NeoVis(config);
    
    vis.registerOnEvent(NeoVisEvents.ClickNodeEvent, (data) => handleClick(data.node));
    vis.registerOnEvent(NeoVisEvents.ClickEdgeEvent, (data) => handleClick(data.edge));
    vis.registerOnEvent(NeoVisEvents.CompletionEvent, (data) => {
      if(data.recordCount) return;
      toast({
        title: 'Sua consulta não retornou resultados.',
        status: 'info',
        duration: 9000,
        isClosable: true,
      })
    });
    vis.registerOnEvent(NeoVisEvents.ErrorEvent, () => closePopup());
    
    vis.render();
  }, [cypher]);

  return <Flex ref={visRef} id="viz" w="100%" />;
}

export const Graph = memo(GraphComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.cypher, nextProps.cypher);
});
