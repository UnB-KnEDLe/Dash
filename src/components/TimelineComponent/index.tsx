import { VerticalTimeline } from 'react-vertical-timeline-component';
import TimelineElement, {TimelineElementProps} from './Element';
import HeadingTwo from '../Typography/HeadingTwo';
import { Flex } from '@chakra-ui/react';

interface TimelineComponentProps {
    secretary: string;
    timelineElements: TimelineElementProps[];
}


export default function TimelineComponent({secretary, timelineElements}: TimelineComponentProps) {
    return (
        <Flex flexDir='column' gap='1rem'>
            <HeadingTwo textAlign='center' color='pallete.darkPrimary' headingTwoText={secretary} />
            
            <Flex
                as={VerticalTimeline}
                position='relative'
                gap='2rem'
                flexDir='column'
                pb='1rem'
                mb='1rem'
                borderBottom='1px'
            >
                { timelineElements.map( ({date, title, text}) => (
                    <TimelineElement
                        date={date}
                        title={title}
                        text={text}
                    />
                )) }
            </Flex>
        </Flex>
    )
}