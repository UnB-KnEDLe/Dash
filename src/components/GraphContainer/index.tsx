import { useCallback, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { Login } from './Login';
import { GraphPopup, PopupContentType } from './GraphPopup';
import dynamic from 'next/dynamic';
import Button from '../Button';
import { AiOutlineExpandAlt, AiOutlineShrink } from 'react-icons/ai';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useUser, Status } from '../../hooks/user';
import { Input } from '../Input';
import { SiNeo4J } from 'react-icons/si';
import { useForm } from 'react-hook-form';

export default function GraphContainer() {
  const handle = useFullScreenHandle();
  const { register, handleSubmit, reset } = useForm();
  const { connectStatus, cypher, handleCypher } = useUser();

  const [popupContent, setPopupContent] = useState<PopupContentType>();
  const [openPopup, setOpenPopup] = useState(false);

  const Graph = dynamic(() => import('./Graph'), {
    ssr: false,
  });

  const onHandleFullScreen = () => (handle.active ? handle.exit() : handle.enter());

  const onHandleCypher = useCallback( values => {
    const {query} = values;
    handleCypher(query)
  }, []);

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
        <Button icon={handle.active ? AiOutlineShrink : AiOutlineExpandAlt} position="absolute" zIndex="1300" right="0" onClick={onHandleFullScreen} />
      )}
      {handle.active && (
        <Flex
          as='form'
          onSubmit={handleSubmit(onHandleCypher)}
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
            {...register('query')}
          />
          <Button type="submit" buttonText="Consultar" />
        </Flex>
      )}
      {connectStatus === Status.Connected ? <Graph cypher={cypher} setPopupContent={setPopupContent} setOpenPopup={setOpenPopup}/> : <Login />}
      <GraphPopup content={popupContent} isOpen={openPopup} setOpenPopup={setOpenPopup}/>
    </Flex>
  );
}
