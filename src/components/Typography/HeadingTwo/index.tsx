import { Text, TextProps } from "@chakra-ui/react";

interface HeadingTwoProps extends TextProps {
  headingTwoText: string;
}

export default function HeadingTwo({ headingTwoText,...rest }: HeadingTwoProps) {
    return (
        <Text
          fontWeight={500}
          fontSize='2rem'
          {...rest}
        >
            {headingTwoText}
        </Text>
    )
}