import { Text, TextProps } from "@chakra-ui/react";

interface InteractiveTextProps extends TextProps {
  interactiveText: string;
}

export default function InteractiveText({ interactiveText, ...rest }: InteractiveTextProps) {
    return (
        <Text
          display='flex'
          marginBlockEnd='0'
          marginBlockStart='0'
          fontWeight={600}
          fontSize='1rem'
          variant='unstyled'
          {...rest}
        >
            {interactiveText}
        </Text>
    )
}