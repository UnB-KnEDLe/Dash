import { Text, TextProps } from "@chakra-ui/react";

interface MenuLinkProps extends TextProps {
  menuLinkText: string;
}

export default function MenuLink({ menuLinkText, ...rest }: MenuLinkProps) {
    return (
        <Text
          marginBlock='0'
          fontWeight={500}
          fontSize='1.25rem'
          variant='unstyled'
          {...rest}
        >
            {menuLinkText}
        </Text>
    )
}