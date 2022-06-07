import { FormControl, Icon, InputLeftElement, InputLeftAddon, FormLabel, InputGroupProps, InputGroup, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { IconType } from "react-icons";


interface InputProps extends InputGroupProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  icon: IconType;
}

export function Input({ name, label, placeholder, type, icon, ...rest }: InputProps){
  const [iconColor, setIconColor] = useState('pallete.primaryLight50');
  const [value, setValue] = useState('');

  const handleChange = useCallback((event) => {
    setValue(event.target.value)
  }, [])
  return (
    <FormControl>
    {!!label && <FormLabel marginBottom='0.5rem' htmlFor={name}>{label}</FormLabel>}

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
        type={type}
        onFocus={() => setIconColor('pallete.primary')}
        onBlur={() => !value ? setIconColor('pallete.primaryLight50') : setIconColor('pallete.primary')}
        focusBorderColor="pallete.primary"
        borderColor='pallete.primaryLight50'
        bgColor="pallete.background"
        variant="filled"
        onChange={handleChange}
        placeholder={placeholder}
        _placeholder={{ color: "gray.400" }}
        _hover={{
          bgColor: '#F8F8F8'
        }}
        size='lg'
      />
    </InputGroup>

  </FormControl>
  );
}