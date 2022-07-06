import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { Neo4jProvider } from 'use-neo4j';
import { Status, Login } from './Login';
import dynamic from 'next/dynamic'

interface GraphContainer {
  cypher: string;
}

export default function GraphContainer({cypher } : GraphContainer) {
  const [connectStatus, setConnectStatus] = useState<Status>(Status.Unconnected);
  const Graph = dynamic(() => import('./Graph'), {
      ssr: false
  })

  return (
    <Flex w="100%" h="100vh">
      {connectStatus !== Status.Connected ? (
        <Graph cypher={cypher}/>
      ) : (
        <Login connectStatus={connectStatus} setConnectStatus={setConnectStatus} />
      )}
    </Flex>
  );
}
