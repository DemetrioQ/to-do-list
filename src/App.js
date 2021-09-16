import { useState } from 'react';
import './App.css';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className='App'>
      <ToDoList />
    </div>
  );
}

export default App;
