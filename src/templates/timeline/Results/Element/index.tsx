import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FcDocument } from 'react-icons/fc';

export interface TimelineElementProps {
    date: string;
    title: string;
    text: string;
}

export default function TimelineElement({date, title, text}: TimelineElementProps) {

    return (
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date={date}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FcDocument />}
      >
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <p>
          {text}
        </p>
      </VerticalTimelineElement>
    )
}