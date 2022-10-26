import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Button from '../../Button';

export default function TimelineSelector() {
    const timelines = ['Timeline 1', 'Timeline 2', 'Timeline A'];
    const [timelineIndex, setTimelineIndex] = useState(0);

    const nextTimelineIndex = () => {
        setTimelineIndex(timelineIndex + 1);
    }

    const prevTimelineIndex = () => {
        setTimelineIndex(timelineIndex - 1);
    }

    return (
        <Flex justifyContent='center'>
            <Flex 
                boxShadow={"0px 1px 5px rgba(0, 0, 0, 0.25)"}
                gap='4rem'
                alignItems='center'
                mt='2rem'
            >
                <Button
                    boxShadow='none'
                    icon={AiOutlineLeft}
                    onClick={prevTimelineIndex}
                    disabled={timelineIndex == 0}
                />
                <Flex
                    p='.5rem'
                    alignItems='center'
                >
                    {timelines[timelineIndex]}
                </Flex>
                <Button
                    boxShadow='none'
                    icon={AiOutlineRight}
                    onClick={nextTimelineIndex}
                    disabled={timelineIndex == timelines.length - 1}
                />
            </Flex>
        </Flex>
    )
}