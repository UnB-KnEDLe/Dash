import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import Button from '../Button';
import { AiOutlineHistory, AiFillCheckCircle } from 'react-icons/ai';
import { useUser } from '../../hooks/user';
import SmallText from '../Typography/SmallText';

export default function QueryHistory() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { history, cypher, handleCypher } = useUser();

  return (
    <>
      <Button onClick={onOpen} icon={AiOutlineHistory}></Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Histórico</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            as={Flex}
            direction="column"
            gap="1rem"
            pb="2rem"
            pt="1rem"
            maxHeight="40rem"
            h="80%"
            overflowY="auto"
          >
            {history.map((query, index) => (
              <Flex
                key={index}
                onClick={() => {
                  handleCypher(query);
                  onClose();
                }}
                w="100%"
                bgColor="pallete.background"
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.25)"
                p="4"
                gap=".5rem"
                position="relative"
                _hover={{ cursor: 'pointer', bgColor: 'pallete.cardBackground' }}
              >
                {cypher === query && (
                  <Flex
                    as={AiFillCheckCircle}
                    position="absolute"
                    top="-.75rem"
                    left="-.75rem"
                    size="1.5rem"
                    color="pallete.primary"
                  />
                )}
                <SmallText smallText={query} />
              </Flex>
            ))}
            { history.length == 0 && <SmallText smallText="Nenhuma consulta no histórico." /> }
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
