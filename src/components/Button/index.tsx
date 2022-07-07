import { Icon, Button as ButtonChakra, ButtonProps as ButtonPropsChakraUI} from '@chakra-ui/react';
import InteractiveText from '../Typography/InteractiveText';

interface ButtonProps extends ButtonPropsChakraUI {
    buttonText?: string;
    icon?: any;
    loading?: boolean;
}

export default function Button({ buttonText, icon, loading, ...rest }: ButtonProps) {
    return (
      <ButtonChakra
        display='flex'
        alignItems='center'
        justify='center'
        flexDirection='row'
        iconSpacing={buttonText ? "0.5rem" : "0"}
        leftIcon={icon ? <Icon as={icon} />: null}
        bgColor={loading ? "transparent" :'pallete.background' }
        color={'pallete.text' }
        boxShadow={!loading && "0px 1px 5px rgba(0, 0, 0, 0.25)"}
        _active={!loading && {
          bgColor: 'pallete.primary',
          color: 'pallete.background',
        }}
        _hover={!loading &&
          {
            bgColor: 'pallete.cardBackground',
          }
        }
        px="4"
        p="4"
        borderRadius='0.125rem'
        {...rest}
      >
          {!!buttonText && <InteractiveText position="relative" top="1.5px" interactiveText={buttonText} />}
      </ButtonChakra>
    );
}