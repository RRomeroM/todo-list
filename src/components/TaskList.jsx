import React from 'react';

const TaskList = ({ taskList, removeTask, updateCompletionStatus }) => {
    return (
        <>
            <h3>
                Task List - Click on a task to set it to completed/not completed
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
                            onClick={() => updateCompletionStatus(task.taskId)}
                        >
                            {task.taskDescription}
                        </span>
                        <button
                            type='button'
                            onClick={() => removeTask(task.taskId)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TaskList;
