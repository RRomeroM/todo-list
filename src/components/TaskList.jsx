import React from 'react';
import { List, Text } from '@chakra-ui/react';
import TaskDetail from './TaskDetail';

const TaskList = ({ taskList, removeTask, updateCompletionStatus }) => {
    return (
        <>
            <Text fontSize='2xl'>Task List</Text>
            <Text fontSize='xs' fontStyle='italic'>
                *Click on a task to set it to completed/not completed
            </Text>
            <List spacing={5}>
                {taskList.map((task) => (
                    <TaskDetail
                        key={task.taskId}
                        task={task}
                        removeTask={removeTask}
                        updateCompletionStatus={updateCompletionStatus}
                    />
                ))}
            </List>
        </>
    );
};

export default TaskList;
