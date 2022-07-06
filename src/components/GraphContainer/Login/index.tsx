import { useState, useCallback, Dispatch, SetStateAction } from 'react';
import { createDriver } from 'use-neo4j';
import { Flex, Box, Stack } from '@chakra-ui/react';
import { DEFAULT_DB_SETTINGS } from '../../../constants/db.constants';
import { Input } from '../../Input';
import Button from '../../Button';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

export type userType = {
  username: string;
  password: string;
};

export enum Status {
  Connected = 1,
  Unconnected,
  Failed,
  Loading,
}

interface LoginProps {
  connectStatus: Status;
  setConnectStatus: Dispatch<SetStateAction<Status>>;
}

export function Login({ connectStatus, setConnectStatus }: LoginProps) {
  const [user, setUser] = useState<userType>();

  const handleLogin = useCallback(() => {
    const { host, port } = DEFAULT_DB_SETTINGS;
    setConnectStatus(Status.Loading);

    createDriver('neo4j', host, port, user?.username, user?.password)
      .verifyConnectivity()
      .then(() => {
        setUser({ username: user?.username, password: user?.password });
        setConnectStatus(Status.Connected);
      })
      .catch(e => {console.log(e);setConnectStatus(Status.Failed) })
      .finally(() => setConnectStatus(Status.Unconnected));
  }, [user]);

  return (
    <Flex justifyContent="center" bgColor="pallete.cardBackground" w="100%" padding="2rem">
      <Stack spacing="1.25rem" w="40%" marginTop="3rem">
        <Input
          key={'username'}
          name={'username'}
          label={'Nome do Usuário'}
          placeholder={''}
          type="text"
          icon={AiOutlineUser}
        />
        <Input
          key={'passsword'}
          name={'password'}
          label={'Senha'}
          placeholder={''}
          type="text"
          icon={RiLockPasswordLine}
        />
        <Flex justifyContent="center">
          <Button
            isLoading={connectStatus == Status.Loading}
            buttonText={`Entrar ${connectStatus}`}
            onClick={handleLogin}
            marginTop="2rem"
          />
        </Flex>
      </Stack>
    </Flex>
  );
}
