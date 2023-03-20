import { Stack, Flex, Select } from '@chakra-ui/react'
import { CONTRACT_KEYS } from '../../constants/search.constants';
import { useExtract } from '../../hooks/extract'
import HeadingTwo from '../Typography/HeadingTwo'
import SmallText from '../Typography/SmallText'

export default function ExtractActTypeSelect() {
  const {
    typeExtractActs,
    handleSalectedExtractionActs,
    selectedExtractAct,
    loadingFile,
  } = useExtract();

  const contractActs = [];
  const personelActs = [];

  typeExtractActs.forEach((act) => {
    let {field} = act;
    if (CONTRACT_KEYS.includes(field)) {
      contractActs.push(act);
      return;
    }
    personelActs.push(act);
  })

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
        onChange={(e) => handleSalectedExtractionActs(e.target.value)}
        value={selectedExtractAct}
        color="pallete.text"
        bg="pallete.secondaryLight100"
        variant="filled"
        borderStyle="none"
        placeholder="Escolha um tipo de ato"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
        size="lg"
        disabled={loadingFile !== 100}
      >
          {contractActs && (
            <optgroup label="Atos de Contrato">
              {contractActs.map((actName, index) => (
                <option key={index} value={actName.field}>
                  {actName.name}
                </option>
              ))}
            </optgroup>
          )}
          {personelActs && (
            <optgroup label="Atos de Pessoal">
              {personelActs.map((actName, index) => (
                <option key={index} value={actName.field}>
                  {actName.name}
                </option>
              ))}
            </optgroup>
          )}
      </Select>
    </Stack>
  )
}
