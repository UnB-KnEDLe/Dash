import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement, {TimelineElementProps} from './Element';
import HeadingTwo from '../Typography/HeadingTwo';
import { Flex } from '@chakra-ui/react';
import { FcDocument } from 'react-icons/fc';

interface TimelineComponentProps {
  items: Array<{
    datePublication: string;
    text: string;
  }>
}

export default function TimelineComponent({items}: TimelineComponentProps) {
  return (
    <VerticalTimeline>
      { items.map( comp => (
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