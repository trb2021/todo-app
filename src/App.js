import React from 'react';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';

import './App.css';
const todos = [
  { id:1, text: 'Cortar cebolla', completed: false },
  { id:2, text: 'Tomar el curso de intro a React de Platzi', completed: false },
  { id:3, text: 'Llorar con la llorona', completed: true },
  { id:4, text: 'Actualizar la BD de eventos', completed: false },
];

function App() {
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo=>(
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
