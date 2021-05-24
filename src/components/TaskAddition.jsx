import React, { useRef, useState } from 'react';
import { Button, Input, HStack } from '@chakra-ui/react';

const TaskAddition = ({ submitTask }) => {
    const [inputTask, setInputTask] = useState('');
    const refInputTask = useRef(null);

    const handleChange = (event) => {
        setInputTask(event.target.value);
    };

    const handleSubmit = (event) => {
        console.log('Submitting!');
        event.preventDefault();
        setInputTask('');
        refInputTask.current.focus();
        submitTask(inputTask);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <HStack>
                    <Input
                        id='inputTodoTask'
                        placeholder='Add a task...'
                        autoComplete='off'
                        value={inputTask}
                        onChange={handleChange}
                        ref={refInputTask}
                    />
                    <Button disabled={!inputTask.length} type='submit'>
                        Add
                    </Button>
                </HStack>
            </form>
        </>
    );
};

export default TaskAddition;
