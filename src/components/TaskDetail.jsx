import React from 'react';
import { ListItem, ListIcon, HStack, IconButton } from '@chakra-ui/react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const TaskDetail = ({ task, removeTask, updateCompletionStatus }) => {
    return (
        <ListItem>
            <HStack>
                <ListIcon
                    as={FaCheckCircle}
                    color={task.isCompleted ? 'green.500' : 'red.500'}
                />
                <span
                    style={{
                        textDecoration: task.isCompleted
                            ? 'line-through'
                            : 'none',
                        cursor: 'pointer',
                    }}
                    onClick={() => updateCompletionStatus(task.taskId)}
                >
                    {task.taskDescription}
                </span>
                <IconButton
                    icon={<FaTimesCircle />}
                    onClick={() => removeTask(task.taskId)}
                >
                    Remove
                </IconButton>
            </HStack>
        </ListItem>
    );
};

export default TaskDetail;
