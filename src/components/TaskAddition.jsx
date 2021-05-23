import React, { useRef, useState } from 'react';

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
                <h1>TODO List App</h1>
                <input
                    id='inputTodoTask'
                    placeholder='Add a task...'
                    autoComplete='off'
                    value={inputTask}
                    onChange={handleChange}
                    ref={refInputTask}
                />
                <button disabled={!inputTask.length} type='submit'>
                    Add
                </button>
            </form>
        </>
    );
};

export default TaskAddition;
