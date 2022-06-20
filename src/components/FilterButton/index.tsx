import { Icon, Flex, Button as ButtonChakra, ButtonProps as ButtonPropsChakraUI} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import InteractiveText from '../Typography/InteractiveText';

interface ButtonProps extends ButtonPropsChakraUI {
    buttonText: string;
    icon?: any;
    active: boolean;
}

export default function FilterButton({ buttonText, icon, active, ...rest }: ButtonProps) {
    return (
      <ButtonChakra
        display='flex'
        alignItems='center'
        justify='center'
        flexDirection='row'
        leftIcon={active ?  <Icon as={AiOutlineMinus} /> : <Icon as={AiOutlinePlus} />}
        bgColor={active ? 'pallete.primary': 'pallete.background' }
        color={active ? 'pallete.background' : 'pallete.text' }
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.25)"
        _hover={
          {
            bgColor: active ? 'pallete.primaryLight100' : 'pallete.cardBackground',
            color: active ? 'pallete.background' : 'pallete.text',
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