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
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date={act.datePublication}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FcDocument />}
          key={index}
        >
          <p>{act.text}</p>
        </VerticalTimelineElement>
      ) ) }
    </VerticalTimeline>
    
  )
}

