import { Stack, Flex, Select } from "@chakra-ui/react";
import HeadingTwo from "../Typography/HeadingTwo";
import SmallText from "../Typography/SmallText";

interface ExtractActTypeSelectProps {
    actsTypes: Array< string[]>;
    onChangeActType?: (actTypeID: string) => void;  // Remove opcional set
    selectedAct: string;
}

export default function ExtractActTypeSelect({actsTypes, onChangeActType, selectedAct}: ExtractActTypeSelectProps) {
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
                onChange={e => onChangeActType(e.target.value)}
                value={selectedAct}
                color="pallete.text"
                bg="pallete.secondaryLight100"
                variant="filled"
                borderStyle="none"
                placeholder="Escolha um tipo de ato"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
                size="lg"
            >
                {actsTypes.map((actName) => (
                    <option key={actName[0]} value={actName[0]}>
                        {actName[1]}
                    </option>
                ))}
            </Select>
        </Stack>
    );
}