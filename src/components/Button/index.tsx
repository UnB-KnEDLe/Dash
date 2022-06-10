import { Icon, Flex, Button as ButtonChakra, ButtonProps as ButtonPropsChakraUI} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import InteractiveText from '../Typography/InteractiveText';


interface ButtonProps extends ButtonPropsChakraUI {
    buttonText: string;
    icon?: any;
}

export default function Button({ buttonText, icon, ...rest }: ButtonProps) {
  const [searchButton, setSearchButton] = useState(false);

  const handleSetSearchButton = useCallback(() => {
    setSearchButton(!searchButton);
  }, [searchButton])

    return (
      <ButtonChakra
        display='flex'
        flex={1}
        alignItems='center'
        justify='center'
        flexDirection='row'
        leftIcon={<Icon as={AiOutlinePlus} _hover={{color: 'pallete.background'}} />}
        bgColor={searchButton ? 'pallete.darkPrimary' : 'pallete.background'}
        color={searchButton ? 'pallete.background' : 'pallete.text'}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.25)"
        _hover={
          {
            bgColor: 'pallete.darkPrimary',
            color: 'pallete.background',
          }
        }
        px="4"
        p="4"
        borderRadius='0.125rem'
        onClick={handleSetSearchButton}
        {...rest}
      >
          <InteractiveText position="relative" top="1.5px" interactiveText={buttonText} />
      </ButtonChakra>
    );
}