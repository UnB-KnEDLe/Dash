import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcDocument } from 'react-icons/fc';
import { useTimeline } from '../../../hooks/timeline'
import { Act } from '../../../shared/interfaces/timeline.interface';
import SmallText from '../../../components/Typography/SmallText';
import { useCallback, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

export default function Results() {
  const { acts } = useTimeline();
  // const [selectedAct, setSelectedAct] = useState<Act|undefined>(undefined);
  // const { isOpen, onOpen, onClose } = useDisclosure()

  if (!acts) {
    return (
      <></>
    )
  }
  const makeShort = useCallback( (text: string) => {
    return text;
    if (text.length <= 220) return text;
    return text.slice(0,219) + '...'
  }, []);

  // const handleAct = useCallback( (act: Act) => {
  //   if (isOpen) {
  //     setSelectedAct(undefined);
  //     onClose();
  //     return;
  //   };
    
  //   setSelectedAct(act);
  //   onOpen();
  // }, [])

  return (
    <VerticalTimeline>
      {/* {selectedAct ? <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedAct.datePublication}</ModalHeader>
          <ModalBody>
            <SmallText smallText={selectedAct.type} />
            {selectedAct.text}
          </ModalBody>
        </ModalContent>
      </Modal> : null } */}
      { acts?.map( (act, index) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#EDEFF5', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid #EDEFF5' }}
          date={act.datePublication}
          iconStyle={{ background: '#2980B9', color: '#fff' }}
          icon={<FcDocument color='#2980B9'/>}
          key={index}
          // onClick={handleAct(act)}
        >
          <SmallText smallText={act.type} />
          <SmallText fontSize='1rem' fontWeight='400' smallText={makeShort(act.text)} />
        </VerticalTimelineElement>
      ) ) }
    </VerticalTimeline>
    
  )
}

