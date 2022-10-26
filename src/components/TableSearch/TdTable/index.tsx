import { Td } from '@chakra-ui/react';
import { useState } from 'react';

interface TdTableProps {
  lineValue: string;
  index: number;
}

export function TdTable({lineValue, index, ...props}: TdTableProps) {
  const [fulField, setFullField] = useState(false);

  return (
    <Td 
      onClick={() => setFullField(true)} 
      onMouseLeave={() => setFullField(false)} 
      key={index} 
      {...props}
    >
    {lineValue.length > 30 && !fulField ? `${lineValue.substring(0, 11)}... ` : lineValue}
    </Td>
  );
}