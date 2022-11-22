import { Checkbox as Check, Flex } from "@chakra-ui/react";
import SmallText from "../Typography/SmallText";

interface CheckboxProps {
    checkboxText: string;
    name?: string;
    onChange?: (e: any) => void;
    value?: string;
    checked?: boolean;
}

export default function Checkbox({ checkboxText, name, onChange, value, checked }: CheckboxProps) {
    return (
        <Flex gap='.75rem'>
            <Check value={value} onChange={onChange} checked={checked} borderColor='pallete.text' />
            <SmallText mb='-.3rem' smallText={checkboxText} />
        </Flex>
    )
}