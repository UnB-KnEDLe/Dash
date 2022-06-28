import { FormControl, Icon, InputLeftElement, FormLabel, InputGroupProps, InputGroup, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef, useCallback, ForwardRefRenderFunction, useState } from "react";
import { IconType } from "react-icons";
import { FieldError } from 'react-hook-form';

interface InputProps extends InputGroupProps {
  name: string;
  label?: string;
  placeholder: string;
  type: string;
  icon: IconType;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
  = ({ name, label, error = null, placeholder, type, icon, ...rest }, ref) => {
  const [iconColor, setIconColor] = useState('pallete.secondary');
  const [value, setValue] = useState('');

  const handleChange = useCallback((event) => {
    setValue(event.target.value)
  }, []);

  return (
    <FormControl isInvalid={!!error}>
    {!!label && <FormLabel marginBottom='0.1rem' htmlFor={name}>{label}</FormLabel>}

    <InputGroup
      display='flex' 
      alignItems='center' 
      justify='center'
      {...rest}>
      <InputLeftElement
        top='0.25rem'
        pointerEvents="none"
        children={
          <Icon 
            as={icon} 
            fontSize="1.5rem"
            color={iconColor}
            
          />}
      />
      <ChakraInput 
        name={name}
        id={name}
        ref={ref}
        type={type}
        onFocus={() => setIconColor('pallete.primary')}
        onBlur={() => !value ? setIconColor('pallete.secondary') : setIconColor('pallete.primary')}
        focusBorderColor="pallete.primary"
        bgColor="pallete.background"
        borderColor={iconColor}
        variant="filled"
        onChange={handleChange}
        placeholder={placeholder}
        _placeholder={{ color: "gray.400" }}
        _hover={{
          bgColor: 'pallete.sidebarBackground'
        }}
        _focus={{
          bgColor: 'pallete.sidebarBackground'
        }}
        size='lg'
      />
    </InputGroup>
    {!! error && (
      <FormErrorMessage>
        {error.message}
      </FormErrorMessage>
    )}
  </FormControl>
  );
}

export const Input = forwardRef(InputBase)