import { Dispatch, SetStateAction, useLayoutEffect, useRef } from 'react';
import { Flex } from '@chakra-ui/react';
import NeoVis, { NeoVisEvents } from 'neovis.js';
import { PopupContentType } from "../GraphPopup";
import { useUser } from '../../../hooks/user';

interface GraphProps {
  cypher: string;
  setPopupContent : Dispatch<SetStateAction<PopupContentType>>;
  setOpenPopup : Dispatch<SetStateAction<boolean>>;
}

function Graph({ cypher, setPopupContent, setOpenPopup }: GraphProps) {
  const visRef = useRef<HTMLDivElement>();
  const { user} = useUser();

  const handleClick = (data: any) => {
    setPopupContent({
      title: data?.raw?.type || data?.raw?.labels[0],
      properties: data?.raw?.properties
    });
    setOpenPopup(true);
  };

  useLayoutEffect(() => {
    const config = {
      containerId: visRef?.current?.id,
      neo4j: {
        serverUser: user.username,
        serverPassword: user.password,
        serverUrl: 'neo4j://164.41.76.30:8080',
      },
      initialCypher: cypher,
    };

    let vis = new NeoVis(config);

    vis.render();

    vis.registerOnEvent(NeoVisEvents.ClickNodeEvent, (data) => handleClick(data.node));
    vis.registerOnEvent(NeoVisEvents.ClickEdgeEvent, (data) => handleClick(data.edge));

  }, [cypher]);

  return <Flex ref={visRef} id="viz" w="100%" />;
}

export default Graph;
