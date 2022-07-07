import { useLayoutEffect, useRef } from 'react';
import { Flex } from '@chakra-ui/react';
import NeoVis, { NEOVIS_DEFAULT_CONFIG, NeoVisEvents } from 'neovis.js';
import { useUser } from '../../../hooks/user';

interface GraphProps {
  username?: string;
  password?: string;
  cypher: string;
}

function Graph({ cypher }: GraphProps) {
  const visRef = useRef<HTMLDivElement>();
  const { user } = useUser();

  const handleCompleted = (vis: any) => {
    console.log(vis.nodes);
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
      [NEOVIS_DEFAULT_CONFIG]: {
        title: 'nome',
      },
    };

    let vis = new NeoVis(config);
    vis.render();
    vis.registerOnEvent(NeoVisEvents.ClickNodeEvent, () => handleCompleted(vis));
  }, [cypher]);

  return <Flex ref={visRef} id="viz" w="100%"></Flex>;
}

export default Graph;
