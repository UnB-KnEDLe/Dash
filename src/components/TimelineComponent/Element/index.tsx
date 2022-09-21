import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Flex } from '@chakra-ui/react';
import HeadingTwo from '../../Typography/HeadingTwo';
import { AiOutlineFile } from 'react-icons/ai';

export interface TimelineElementProps {
    date: string;
    title: string;
    text: string;
}

export default function TimelineElement({date, title, text}: TimelineElementProps) {
    const iconStyle = {
        display: 'flex',
        position: 'absolute',
        left: 'calc(50% - 2rem)',
        padding: '1rem',
        borderRadius: '50%',
        border: '3px solid #e3e3e3',
        background: '#17385D',
        color: '#EDEFF5',
        alignSelf: 'center'
    }
    
    const contentStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    }

    return (
        <Flex
            as={VerticalTimelineElement}
            date={date}
            order='revert'
            justifyContent='flex-end'
            contentArrowStyle={{ borderRight: '3px solid #D9D9D9' }}
            icon={<AiOutlineFile size='1.5rem'/>}
            gap='1rem'
            iconStyle={iconStyle}
            contentStyle={contentStyle}
        >
            <HeadingTwo headingTwoText={title} />
            {text}
        </Flex>
    )
}