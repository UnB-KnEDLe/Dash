import { Stack, Flex } from "@chakra-ui/react";
import HeadingTwo from "../Typography/HeadingTwo";
import SmallText from "../Typography/SmallText";
import Dropzone from "../Dropzone";

export default function ExtractSelectFile() {


    return (
        <Stack spacing="1rem">
            <Flex flexDirection="column">
                <HeadingTwo headingTwoText="Selecionar" />
                <SmallText smallText="Arraste ou selecione o arquivo para extração." />
            </Flex>
            <Dropzone />
        </Stack>
    );
}