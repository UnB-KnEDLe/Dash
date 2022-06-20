import { Icon, Flex, Button as ButtonChakra, ButtonProps as ButtonPropsChakraUI} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import InteractiveText from '../Typography/InteractiveText';

interface ButtonProps extends ButtonPropsChakraUI {
    buttonText: string;
    icon?: any;
}

export default function Button({ buttonText, icon, ...rest }: ButtonProps) {
    return (
      <ButtonChakra
        display='flex'
        alignItems='center'
        justify='center'
        flexDirection='row'
        leftIcon={icon ? <Icon as={icon} />: null}
        bgColor={'pallete.background' }
        color={'pallete.text' }
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.25)"
        _active={{
          bgColor: 'pallete.primary',
          color: 'pallete.background',
        }}
        _hover={
          {
            bgColor: 'pallete.cardBackground',
          }
        }
        px="4"
        p="4"
        borderRadius='0.125rem'
        {...rest}
      >
          <InteractiveText position="relative" top="1.5px" interactiveText={buttonText} />
      </ButtonChakra>
    );
}