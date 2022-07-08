import { useCallback, useEffect, useState } from 'react';
import { Flex,  Stack, useToast } from '@chakra-ui/react';
import { Input } from '../../Input';
import Button from '../../Button';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useUser, Status } from '../../../hooks/user';
import HeadingTwo from '../../Typography/HeadingTwo';
import { useForm } from 'react-hook-form';

export function Login() {
  const { connectStatus, handleLogin } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register, handleSubmit } = useForm();
  const toast = useToast();

  const onHandleLogin = useCallback(values => {
    const { username, password } = values;
    handleLogin({ username, password })
  }, []);

  useEffect( () => {
    if (connectStatus === Status.Connected) {
      toast({
        title: 'Login realizado com sucesso!',
        description: 'Você está logado no sistema.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      return
    }
    if (connectStatus === Status.Failed) {
      toast({
        title: 'Falha no login.',
        description: 'Usuário ou senha inválidos.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }, [connectStatus]);

  return (
    <Flex justifyContent='center' bgColor="pallete.background" w="100%" padding="2rem">
      <Stack as="form" spacing="1.25rem" w="40%" onSubmit={handleSubmit(onHandleLogin)}>
        <HeadingTwo headingTwoText="Login" />
        <Input
          key={'username'}
          name={'username'}
          label={'Nome do Usuário'}
          placeholder={''}
          type="text"
          value={username}
          icon={AiOutlineUser}
          {...register('username')}
        />
        <Input
          key={'passsword'}
          name={'password'}
          label={'Senha'}
          placeholder={''}
          type="password"
          value={password}
          icon={RiLockPasswordLine}
          {...register('password')}
        />
        <Flex direction="column" textAlign="center" justifyContent="center">
          <Button
            isLoading={connectStatus == Status.Loading}
            buttonText={`Entrar`}
            type="submit"
            marginTop="1rem"
          />
        </Flex>
      </Stack>
    </Flex>
  );
}
