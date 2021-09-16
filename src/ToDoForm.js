import React from 'react';
import { useState } from 'react/cjs/react.development';

export default function ToDoForm(props) {
  const [taskInput, setTaskInput] = useState('');
  const onChangeTaskInput = (event) => {
    setTaskInput(event.target.value);
  };
  const onClickAddTask = (event) => {
    props.onSubmit({
      id: Math.floor(props.length + 1),
      text: taskInput,
    });
    setTaskInput('')
  };

  return (
    <div>
      <input  type='text' value={taskInput} palceholder='add task' onChange={onChangeTaskInput} />
      <button onClick={onClickAddTask}>Add Task</button>
    </div>
  );
}
