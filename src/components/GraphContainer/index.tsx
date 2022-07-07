import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { Login } from './Login';
import dynamic from 'next/dynamic'
import Button from '../Button';
import { AiOutlineExpand } from 'react-icons/ai';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useUser, Status } from '../../hooks/user';

interface GraphContainer {
  cypher: string;
}

export default function GraphContainer({cypher } : GraphContainer) {
  const handle = useFullScreenHandle();
  const { connectStatus } = useUser();
  const Graph = dynamic(() => import('./Graph'), {
      ssr: false
  })

  const onHandleFullScreen = () => handle.active ? handle.exit() : handle.enter();

  return (
    <Flex
      as={FullScreen}
      handle={handle}
      w="100%"
      h="100%"
      position='relative'
      borderColor='pallete.cardBackground'
      borderRadius='.25rem'
      borderWidth='.125rem'
      bg='pallete.background'
    >
      <Button
        icon={AiOutlineExpand}
        position='absolute'
        zIndex='10000'
        right='0'
        onClick={onHandleFullScreen}
      />
      {connectStatus !== Status.Connected ? (
        <Graph cypher={cypher}/>
      ) : (
        <Login />
      )}
    </Flex>
  );
}
