import { Text, TextProps } from "@chakra-ui/react";

interface HeadingOneProps extends TextProps {
  headingOneText: string;
}

export default function HeadingOne({ headingOneText, ...rest }: HeadingOneProps) {
    return (
        <Text
          fontWeight={700}
          fontSize='4rem'
          {...rest}
        >
            {headingOneText}
        </Text>
    )
}