import React, { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import AppUI from './AppUI';

/*const defaultTodos = [
  { id:1, text: 'Cortar cebolla', completed: false },
  { id:2, text: 'Tomar el curso de intro a React de Platzi', completed: false },
  { id:3, text: 'Llorar con la llorona', completed: true },
  { id:4, text: 'Actualizar la BD de eventos', completed: true },
];*/

function App() {
  
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length>=1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  
  const toggleCompleteTodo = (todoId) => {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (todoId) => {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);    
  }

  return (
    <AppUI
      error={error}
      loading={loading}
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      toggleCompleteTodo = {toggleCompleteTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;
