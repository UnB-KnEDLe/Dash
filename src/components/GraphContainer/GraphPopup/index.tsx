import { Flex, IconButton } from '@chakra-ui/react';
import { useCallback } from 'react';
import SmallText from '../../Typography/SmallText';
import HeadingTwo from '../../Typography/HeadingTwo';
import { IoMdClose } from 'react-icons/io';
import { useUser } from '../../../hooks/user';

export function GraphPopup() {
  const { popupContent, setPopupContent } = useUser();
  const onClose = useCallback(() => {
    setPopupContent(null);
  }, []);

  return (
    <Flex
      visibility={!!popupContent ? 'visible' : 'hidden'}
      direction="column"
      maxHeight="80%"
      maxWidth="30rem"
      minWidth="10rem"
      position="absolute"
      bottom="1rem"
      left="1rem"
      bgColor="pallete.cardBackground"
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.25)"
      p="4"
    >
      <Flex direction="row" justifyContent="space-between" alignItems='center'>
        <HeadingTwo headingTwoText={popupContent?.title} />
        <IconButton aria-label='Search database' icon={<IoMdClose />} onClick={onClose} size='lg'/>
      </Flex>
      <Flex as={Flex} direction="column" overflowY="auto">
        {Object.entries(popupContent?.properties || {}).map((entries, index) => (
          <Flex key={index} w="100%" gap="0.5rem">
            <SmallText smallText={`${entries[0]}: `} fontWeight="bold" />
            <SmallText smallText={`${entries[1]}`} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
