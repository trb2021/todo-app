import React from 'react';
import { useTodos } from '../../hooks/useTodos';
import TodoSearch from '../TodoSearch/TodoSearch';
import TodoList from '../TodoList/TodoList';
import TodoItem from '../TodoItem/TodoItem';
import CreateTodoButton from '../CreateTodoButton/CreateTodoButton';
import Modal from "../Modal/ModalAddTodo";
import TodoForm from "../TodoForm/TodoForm";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoFooter from "../TodoFooter/TodoFooter";
import TodoCounter from "../TodoCounter/TodoCounter";
import TodoFilter from "../TodoFilter/TodoFilter";
import "./App.css";


function App() {
  const {
      loading,
      error,    
      searchedTodos,
      filteredTodos,
      toggleCompleteTodo,
      deleteTodo,
      openModal,
      totalTodos, 
      completedTodos,
      setFilterTodo, 
      deleteCompletedTodos,
      darkMode, 
      toggleDarkMode,
      searchValue, 
      setSearchValue,
      addTodo,
      setOpenModal,
    } = useTodos();

  return (
    <>
      <TodoHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode }/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {error && <p className="message">Hubo un error, lo sentimos...</p>}
        {loading && <p className="message">Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p className="message">Crea tu primer ToDo...</p>}

        {filteredTodos.map(todo=>(
          <TodoItem key={todo.id} 
                    id={todo.id} 
                    text={todo.text} 
                    completed={todo.completed} 
                    onComplete={() => toggleCompleteTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                    />
        ))}
      </TodoList>
      <TodoFooter>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
        <TodoFilter setFilterTodo={setFilterTodo} deleteCompletedTodos={deleteCompletedTodos}/>
      </TodoFooter>
       {!!openModal && (
         <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
         </Modal>
       )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export default App;
