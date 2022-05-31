import { Flex, Button, ButtonProps as ButtonPropsChakraUI} from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import InteractiveText from '../Typography/InteractiveText';


interface ButtonProps extends ButtonPropsChakraUI {
    buttonText: string;
    icon?: any;
}

export default function Header({ buttonText, icon, ...rest }: ButtonProps) {
    return (
      <Button
        flexDirection='row'
        padding='1.25rem'
        bgColor='pallete.primary' 
        align='center'
        justify='center'
        variant='unstyled'
        gap='0.5rem'
        {...rest}
      >
        <AiOutlinePlus/>
        <InteractiveText color='pallete.background' interactiveText={buttonText}/>
      </Button>
    );
}