import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcDocument } from 'react-icons/fc';
import { useTimeline } from '../../../hooks/timeline'
import { Box } from '@chakra-ui/react';
import { BoxLoading } from 'react-loadingg';

export default function Results() {
  const { secretaries, acts } = useTimeline();

  if(!secretaries && acts.length == 0) {
    return (
      <Box
        flex={3}
        padding='2rem'
        borderRadius='0.25rem'
        bgColor='pallete.cardBackground'
        flexDirection='column'
        h='100%'
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"
      >
        <BoxLoading/>
      </Box>
    )
  }

  return (
    <VerticalTimeline>
      { acts.map( comp => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date={comp.datePublication}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FcDocument />}
        >
          <p>{comp.text}</p>
        </VerticalTimelineElement>
      ) ) }
    </VerticalTimeline>
    
  )
}

