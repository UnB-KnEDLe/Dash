import { Td, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useExtract } from '../../../hooks/extract';
import { COLOR_PARAMETER } from '../constants';

interface TdTableProps {
  lineValue: string;
  index: number;
  hasSwitchView: boolean;
  position: number;
}

export function TdTable({lineValue, index,position, hasSwitchView=true, ...props}: TdTableProps) {
  const [fulField, setFullField] = useState(false);
  const {headerActText, bodyActText } = useExtract();

  const deleteEntities = ['titulo', 'text', "Nome do DODF", "Data do DODF", "Numero do DODF"];

  const indexesArrayWithoutDeleteEntities = deleteEntities
  .map(item => headerActText.indexOf(item))

  const headerActTextWithoutDeleteEntities = headerActText
  .filter((item, index) => 
    index !== indexesArrayWithoutDeleteEntities[index])


  const bodyActFormatted = bodyActText
  .map((item, i) => item
  .filter((item, j) => 
    j !== indexesArrayWithoutDeleteEntities[j]))
  

  

  
  function paintVariablesInText(lineValue: string){
    let sizeHeader = headerActTextWithoutDeleteEntities.length;
    let count = 0;

    while(count < sizeHeader){
      let initialPaintString = lineValue
      .indexOf(bodyActFormatted[position]?.[count]?.slice(0,7))
      let sizePaintString = bodyActFormatted[position]?.[count]?.length
      let endPosition = sizePaintString + initialPaintString

      if(sizePaintString !== undefined && !deleteEntities.includes(headerActTextWithoutDeleteEntities[count])) {

        let firstStep =  lineValue.substring(0, initialPaintString)
        let substringTemplate = 
          `<time title=${headerActTextWithoutDeleteEntities[count]} style="cursor: pointer; color:black; text-align: center; background: ${COLOR_PARAMETER[headerActTextWithoutDeleteEntities[count]]}; padding: 8px 8px 4px 8px; border-radius: 4px">${bodyActFormatted[position]?.[count]}</time>`
        let finalStep = lineValue.substring(endPosition)

        lineValue = `${firstStep}${substringTemplate}${finalStep}`
      }

      count++;

      }

    return lineValue
  }

  return (
    <Td 
      onClick={() => hasSwitchView && setFullField(true)} 
      onMouseLeave={() => hasSwitchView && setFullField(false)} 
      key={index} 
      {...props}
    >
    {hasSwitchView 
    ? (lineValue.length > 30 && !fulField ? `${lineValue.substring(0, 11)}... ` : lineValue)
    : <Text 
        lineHeight="2rem" 
        fontSize="1.2rem"
        dangerouslySetInnerHTML={{__html: paintVariablesInText(lineValue)}}>
      </Text>}

    </Td>
  );
}