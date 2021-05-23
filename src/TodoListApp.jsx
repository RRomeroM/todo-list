import React, { useEffect, useState } from 'react';

export const TodoListApp = () => {
    const [taskList, setTaskList] = useState(
        JSON.parse(window.localStorage.getItem('taskList')) || []
    );

    useEffect(() => {
        window.localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting!');
        setTaskList(() => [
            {
                taskId: Date.now(),
                taskDescription: event.target.elements.inputTodoTask.value,
                isCompleted: false,
            },
            ...taskList,
        ]);
    };

    const handleRemove = (taskId) => {
        console.log('Removing!', taskId);
        setTaskList(() => taskList.filter((task) => task.taskId !== taskId));
    };

    const handleCompletionStatus = (taskId) => {
        console.log('Setting completion status!', taskId);
        setTaskList(() =>
            taskList.map((task) => {
                if (task.taskId === taskId)
                    return {
                        ...task,
                        isCompleted: !task.isCompleted,
                    };
                else return task;
            })
        );
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>TODO List App</h1>
                <input
                    id='inputTodoTask'
                    placeholder='Add a task...'
                    autoComplete='off'
                />
                <button type='submit'>Add</button>

                <h3>
                    Task List - Click on it to set it to completed/not completed
                </h3>
                <ul>
                    {taskList.map((task) => (
                        <li key={task.taskId}>
                            <span
                                style={{
                                    textDecoration: task.isCompleted
                                        ? 'line-through'
                                        : 'none',
                                    cursor: 'pointer',
                                }}
                                onClick={() =>
                                    handleCompletionStatus(task.taskId)
                                }
                            >{`${task.taskId} - ${task.taskDescription}`}</span>
                            <button
                                type='button'
                                onClick={() => handleRemove(task.taskId)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </form>
        </>
    );
};
