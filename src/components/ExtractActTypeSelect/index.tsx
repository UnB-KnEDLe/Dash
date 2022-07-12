import { Stack, Flex, Select } from "@chakra-ui/react";
import { useExtract } from "../../hooks/extract";
import HeadingTwo from "../Typography/HeadingTwo";
import SmallText from "../Typography/SmallText";

export default function ExtractActTypeSelect() {
    const { typeExtractActs, handleSalectedExtractionActs, selectedExtractAct } = useExtract();

    return (
        <Stack spacing="1rem">
            <Flex flexDirection="column">
                <HeadingTwo headingTwoText="Tipo de ato" />
                <SmallText smallText="Selecione o tipo de ato que deseja visualizar" />
            </Flex>
            <Select
                _hover={{ bg: 'pallete.primaryLight50' }}
                borderRadius="0.25rem"
                fontWeight="500"
                onChange={e => handleSalectedExtractionActs(e.target.value)}
                value={selectedExtractAct}
                color="pallete.text"
                bg="pallete.secondaryLight100"
                variant="filled"
                borderStyle="none"
                placeholder="Escolha um tipo de ato"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
                size="lg"
            >
                {typeExtractActs.map((actName, index) => (
                    <option key={index} value={actName["field"]}>
                        {actName["name"]}
                    </option>
                ))}
            </Select>
        </Stack>
    );
}