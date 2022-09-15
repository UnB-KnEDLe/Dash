import { Checkbox as Check, Flex } from "@chakra-ui/react";
import SmallText from "../Typography/SmallText";

interface CheckboxProps {
    checkboxText: string;
    name: string;
}

export default function Checkbox({ checkboxText, name }: CheckboxProps) {
    return (
        <Flex gap='.75rem'>
            <Check borderColor='pallete.text' />
            <SmallText mb='-.3rem' smallText={checkboxText} />
        </Flex>
    )
}