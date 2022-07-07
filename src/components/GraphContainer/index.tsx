import { Flex } from '@chakra-ui/react';
import { Login } from './Login';
import dynamic from 'next/dynamic';
import Button from '../Button';
import { AiOutlineExpand } from 'react-icons/ai';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useUser, Status } from '../../hooks/user';
import { Input } from '../Input';
import { SiNeo4J } from 'react-icons/si';

export default function GraphContainer() {
  const handle = useFullScreenHandle();
  const { connectStatus, cypher, setCypher } = useUser();
  const Graph = dynamic(() => import('./Graph'), {
    ssr: false,
  });

  const onHandleFullScreen = () => (handle.active ? handle.exit() : handle.enter());

  return (
    <Flex
      as={FullScreen}
      handle={handle}
      w="100%"
      h="100%"
      position="relative"
      borderColor="pallete.cardBackground"
      borderRadius=".25rem"
      borderWidth=".125rem"
      bg="pallete.background"
    >
      {connectStatus === Status.Connected && (
        <Button icon={AiOutlineExpand} position="absolute" zIndex="10000" right="0" onClick={onHandleFullScreen} />
      )}
      {handle.active && (
        <Flex
          gap="1rem"
          position="absolute"
          w="80%"
          background="pallete.background"
          zIndex="10000"
          top="1rem"
          left="10%"
          alignItems="center"
        >
          <Input
            key={'query'}
            name=""
            label=""
            placeholder=""
            type="text"
            icon={SiNeo4J}
            value={cypher}
            onChange={() => setCypher(cypher)}
          />
          <Button buttonText="Consultar" onClick={() => setCypher(cypher)} />
        </Flex>
      )}
      {connectStatus === Status.Connected ? <Graph cypher={cypher} /> : <Login />}
    </Flex>
  );
}
