import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcDocument } from 'react-icons/fc';
import { useTimeline } from '../../../hooks/timeline'

export default function Results() {
  const { secretaries, acts } = useTimeline();

  if (!acts) {
    return (
      <></>
    )
  }

  return (
    <VerticalTimeline>
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
          <p>{act.text}</p>
        </VerticalTimelineElement>
      ) ) }
    </VerticalTimeline>
    
  )
}

