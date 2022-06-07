import { Flex } from '@chakra-ui/react';
import HeadingOne from '../Typography/HeadingOne';
import SmallText from '../Typography/SmallText';

interface HeaderProps {
    title: string;
    description?: string;
}

export function Header({ title, description}: HeaderProps) {
    return (
        <Flex
            as='header'
            gap='2rem'
            align='center'
        >
            <HeadingOne headingOneText={title}/>
            <SmallText smallText={description} />
        </Flex>
    );
}