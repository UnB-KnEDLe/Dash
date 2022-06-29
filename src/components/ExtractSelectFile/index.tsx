import { Stack, Flex, Input } from "@chakra-ui/react";
import HeadingTwo from "../Typography/HeadingTwo";
import SmallText from "../Typography/SmallText";
import Dropzone from "../Dropzone";

export default function ExtractSelectFile() {
    return (
        <Stack spacing="1rem">
            <Flex flexDirection="column">
                <HeadingTwo headingTwoText="Selecionar" />
                <SmallText smallText="Arraste ou selecione os arquivos para extração." />
            </Flex>
            <Dropzone onDrop={() => {return}}/>
        </Stack>
    );
}