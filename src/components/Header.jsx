import React from 'react';
import {
    Flex,
    Heading,
    IconButton,
    Spacer,
    useColorMode,
} from '@chakra-ui/react';
import { FaRegMoon, FaSun } from 'react-icons/fa';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Flex p='2'>
                <Heading as='h2' size='xl' isTruncated>
                    TODO - List App
                </Heading>
                <Spacer />
                <IconButton
                    aria-label='Search database'
                    icon={colorMode === 'light' ? <FaRegMoon /> : <FaSun />}
                    onClick={toggleColorMode}
                />
            </Flex>
        </>
    );
};

export default Header;
