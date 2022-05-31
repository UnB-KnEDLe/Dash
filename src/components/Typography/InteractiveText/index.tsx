import { Text, TextProps } from "@chakra-ui/react";

interface InteractiveTextProps extends TextProps {
  interactiveText: string;
}

export default function InteractiveText({ interactiveText, ...rest }: InteractiveTextProps) {
    return (
        <Text
          fontWeight={700}
          fontSize='1rem'
          color='pallete.primary'
          {...rest}
        >
            {interactiveText}
        </Text>
    )
}