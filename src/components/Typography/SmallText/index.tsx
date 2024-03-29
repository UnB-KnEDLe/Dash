import { Text, TextProps } from "@chakra-ui/react";

interface SmallTextProps extends TextProps {
  smallText: string;
}

export default function SmallText({ smallText, ...rest }: SmallTextProps) {
    return (
        <Text
          fontWeight={500}
          fontSize='lg'
          {...rest}
        >
            {smallText}
        </Text>
    )
}