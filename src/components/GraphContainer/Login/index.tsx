import { useState } from 'react';
import { Flex,  Stack } from '@chakra-ui/react';
import { Input } from '../../Input';
import Button from '../../Button';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useUser, Status } from '../../../hooks/user';

export function Login() {
  const { connectStatus, handleLogin } = useUser();
  const [user, setUser] = useState<{username: string, password: string}>();

  const onHandleLogin = () => handleLogin(user)

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
            onClick={onHandleLogin}
            marginTop="2rem"
          />
        </Flex>
      </Stack>
    </Flex>
  );
}
