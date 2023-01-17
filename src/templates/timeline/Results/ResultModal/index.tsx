import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { Act } from '../../../../shared/interfaces/timeline.interface';
import SmallText from '../../../../components/Typography/SmallText';

interface ResultModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedAct: Act|undefined;
}

export default function ResultModal({isOpen, onClose, selectedAct}: ResultModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            size='xl'
            onClose={onClose}
            scrollBehavior='inside'
            motionPreset='slideInBottom'
            blockScrollOnMount
            closeOnOverlayClick
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>
                {selectedAct?.type}
                <ModalCloseButton />
                </ModalHeader>
            <ModalBody overflowY='auto'>
                <SmallText color='pallete.primary' smallText={selectedAct?.datePublication} mb='.75rem'/>
                {selectedAct?.text}
            </ModalBody>
            </ModalContent>
        </Modal>
    )
}