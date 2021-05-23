import React, { useEffect, useRef, useState } from 'react';
import useLocalStorageState from './hooks/useLocalStorageState';
import TaskAddition from './components/TaskAddition';
import TaskList from './components/TaskList';

export const TodoListApp = () => {
    const [taskList, setTaskList] = useLocalStorageState('taskList');

    const handleTaskSubmitted = (task) => {
        setTaskList(() => [
            {
                taskId: Date.now(),
                taskDescription: task,
                isCompleted: false,
            },
            ...taskList,
        ]);
    };

    const handleRemoveTask = (taskId) => {
        console.log('Removing!', taskId);
        setTaskList(() => taskList.filter((task) => task.taskId !== taskId));
    };

    const handleUpdateCompletionStatus = (taskId) => {
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
            <TaskAddition submitTask={(task) => handleTaskSubmitted(task)} />
            <TaskList
                taskList={taskList}
                removeTask={(taskId) => handleRemoveTask(taskId)}
                updateCompletionStatus={(taskId) =>
                    handleUpdateCompletionStatus(taskId)
                }
            />
        </>
    );
};
