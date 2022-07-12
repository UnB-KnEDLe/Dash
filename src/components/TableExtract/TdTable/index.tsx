import { Td } from '@chakra-ui/react';
import { useState } from 'react';

interface TdTableProps {
  lineValue: string;
  index: number;
  hasSwitchView: boolean;
}

export function TdTable({lineValue, index, hasSwitchView=true, ...props}: TdTableProps) {
  const [fulField, setFullField] = useState(false);

  return (
    <Td 
      onClick={() => setFullField(true)} 
      onMouseLeave={() => setFullField(false)} 
      key={index} 
      {...props}
    >
    {hasSwitchView ? (lineValue.length > 30 && !fulField ? `${lineValue.substring(0, 11)}... ` : lineValue): lineValue}
    </Td>
  );
}