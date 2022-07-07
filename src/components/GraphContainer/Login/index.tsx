import { useState } from 'react';
import { Flex,  Stack } from '@chakra-ui/react';
import { Input } from '../../Input';
import Button from '../../Button';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useUser, Status } from '../../../hooks/user';
import HeadingTwo from '../../Typography/HeadingTwo';
import SmallText from '../../Typography/SmallText';

export function Login() {
  const { connectStatus, handleLogin } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onHandleLogin = () => {
    handleLogin({ username, password })
  };

  return (
    <Flex justifyContent='center' bgColor="pallete.background" w="100%" padding="2rem">
      <Stack spacing="1.25rem" w="40%">
        <HeadingTwo headingTwoText="Login" />
        <Input
          key={'username'}
          name={'username'}
          label={'Nome do Usuário'}
          placeholder={''}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          icon={AiOutlineUser}
        />
        <Input
          key={'passsword'}
          name={'password'}
          label={'Senha'}
          placeholder={''}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={RiLockPasswordLine}
        />
        <Flex direction="column" textAlign="center" justifyContent="center">
          {connectStatus === Status.Failed && (
            <SmallText
              color="pallete.error"
              smallText="Usuário ou senha inválidos."
            />
          )}
          <Button
            isLoading={connectStatus == Status.Loading}
            buttonText={`Entrar`}
            onClick={onHandleLogin}
            marginTop="1rem"
          />
        </Flex>
      </Stack>
    </Flex>
  );
}
