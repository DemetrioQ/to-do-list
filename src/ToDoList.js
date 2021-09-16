import React from 'react';
import { useState } from 'react/cjs/react.development';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

export default function ToDoList() {
  const [todo, setToDo] = useState([]);

  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }

    const newToDoList = [task, ...todo];

    setToDo(newToDoList);
    console.log(task, ...todo);
  };

  const editTask = (taskId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setToDo((prev) => prev.map((item) => (item.id === taskId ? newValue : item)));
  };

  const removeTask = (id) => {
    const removedArr = [...todo].filter((task) => task.id !== id);

    setToDo(removedArr);
  };


  return (
    <div>
      <h1>To-Do List</h1>
      <ToDoForm onSubmit={addTask} length={todo.length} />
      <ToDo tasks={todo} removeTask={removeTask} editTask={editTask} />
    </div>
  );
}
