import { Flex } from '@chakra-ui/react';
import HeadingTwo from '../Typography/HeadingTwo';
import SmallText from '../Typography/SmallText';

interface HeaderProps {
    title: string;
    description?: string;
}

export default function Header({ title, description}: HeaderProps) {
    return (
        <Flex
            as='header'
            align='center'
            gap='6'
            marginBottom={4}
        >
            <HeadingTwo headingTwoText={title}/>
            <SmallText smallText={description} />
        </Flex>
    );
}