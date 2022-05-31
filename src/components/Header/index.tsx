import { Text, Flex } from '@chakra-ui/react';

type HeaderProps = {
    title: string;
    description?: string;
}

export default function Header(props: HeaderProps) {
    const {title, description} = props;

    return (
        <Flex
            as='header'
            align='center'
            gap='6'
            marginBottom={4}
        >
            <Text fontWeight='medium' fontSize='xx-large'>
                {title}
            </Text>
            <Text fontSize='sm'>
                {description}
            </Text>
        </Flex>
    );
}