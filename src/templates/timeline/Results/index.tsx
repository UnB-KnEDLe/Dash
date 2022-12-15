import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcDocument } from 'react-icons/fc';
import { useTimeline } from '../../../hooks/timeline'
import { Act } from '../../../shared/interfaces/timeline.interface';
import SmallText from '../../../components/Typography/SmallText';
import { useCallback, useState } from 'react';
import { useDisclosure, Box } from '@chakra-ui/react';
import ResultModal from './ResultModal'

export default function Results() {
  const { acts } = useTimeline();
  const [selectedAct, setSelectedAct] = useState<Act|undefined>(undefined);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const makeShort = useCallback( (text: string) => {
    if (text.length <= 220) return text;
    return text.slice(0,219) + '...'
  }, []);

  const handleAct = useCallback( (act: Act) => {
    onOpen();
    setSelectedAct(act);
  }, [])

  return (
    acts.length ? (
      <VerticalTimeline>
        {isOpen ? <ResultModal isOpen={isOpen} selectedAct={selectedAct} onClose={onClose} /> : null }
        { acts?.map( (act, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#EDEFF5', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #EDEFF5' }}
            date={act.datePublication}
            iconStyle={{ background: '#2980B9', color: '#fff' }}
            icon={<FcDocument color='#2980B9'/>}
            key={index}
            
          >
            <Box onClick={() => handleAct(act)} _hover={{cursor: "pointer"}}>
              <SmallText smallText={act.type}/>
              <SmallText fontSize='1rem' fontWeight='400' smallText={makeShort(act.text)} />
            </Box>
          </VerticalTimelineElement>
        ) ) }
      </VerticalTimeline>
    ) : (
      <></>
    )
  )
}

