import React from 'react';
import { useState } from 'react/cjs/react.development';
import { RiCloseLine } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import ToDoForm from './ToDoForm';

export default function ToDo({ tasks, removeTask, editTask }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitEdit = (value) => {
    value.id = edit.id;
    editTask(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitEdit} />;
  }

  return tasks.map((task, index) => (
    <div className="tasks">
        <span>{task.text}</span>
      <div>
        <RiCloseLine onClick={() => removeTask(task.id)} />
        <AiFillEdit onClick={() => setEdit({ id: task.id, value: task.text })} />
      </div>
    </div>
  ));
}
