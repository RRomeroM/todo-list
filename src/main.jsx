import React from 'react';
import ReactDOM from 'react-dom';
import { TodoListApp } from './TodoListApp';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './config/theme';

console.log(theme.config.initialColorMode);
ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <TodoListApp />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
