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
  const {headerActText, highlights } = useExtract();

  const deleteEntities = [
    'titulo', 'text', "Nome do DODF", 
    "Data do DODF", "Numero do DODF", 
    'Dodf_fonte_arquivo', 'Dodf_fonte_data', 'Dodf_fonte_numero'];

  const indexesArrayWithoutDeleteEntities = deleteEntities
  .map(item => headerActText.indexOf(item))

  
  const headerActTextWithoutDeleteEntities = headerActText
  .filter((item, index) => 
    index !== indexesArrayWithoutDeleteEntities[index])

  
  const bodyActFormatted = highlights
  .map((item, i) => item
  .filter((item, j) => 
    j !== indexesArrayWithoutDeleteEntities[j.name]))

  const bodyActFormattedWithoutPoints = bodyActFormatted.map(i => i.map(j => {
    if(j?.name === '.'){
        return null
    }
    return j
  }))

  function paintVariablesInText(lineValue: string){

    let sizeHeader = headerActTextWithoutDeleteEntities.length;

    let count = 0;
    let copyLineValue = lineValue;

    while(count < sizeHeader){
      
      let initialPaintString = 
        bodyActFormattedWithoutPoints[position]?.[count]?.start

      let endPosition = 
      bodyActFormattedWithoutPoints[position]?.[count]?.end

      let paintString = copyLineValue.slice(initialPaintString, endPosition)
      
      if(paintString.length && 
        !deleteEntities.includes(headerActTextWithoutDeleteEntities[count]) 
        && !!bodyActFormattedWithoutPoints[position]?.[count]?.name) {

        let substringTemplate = 
          `<time 
            title=${headerActTextWithoutDeleteEntities[count]} 
              style="cursor: pointer; 
              color:black;
              text-align:center; 
              background: ${COLOR_PARAMETER[headerActTextWithoutDeleteEntities[count]]};
              padding: 8px 8px 4px 8px; 
              border-radius: 4px">
              ${bodyActFormattedWithoutPoints[position]?.[count]?.name}
            </time>`

        lineValue = lineValue.replace(paintString, substringTemplate)
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