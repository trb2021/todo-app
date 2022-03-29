import React, { useContext } from "react";
import TodoCounter from '../TodoCounter/TodoCounter';
import TodoSearch from '../TodoSearch/TodoSearch';
import TodoList from '../TodoList/TodoList';
import TodoItem from '../TodoItem/TodoItem';
import CreateTodoButton from '../CreateTodoButton/CreateTodoButton';
import { TodoContext } from "../../context/TodoContext";
import Modal from "../Modal/ModalAddTodo";
import TodoForm from "../TodoForm/TodoForm";
import TodoHeader from "../TodoHeader/TodoHeader";
import './AppUI.css';


function AppUI () {

  const {
    loading,
    error,    
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
} = useContext(TodoContext);

    return(
        <>
      <TodoHeader/>
      <TodoSearch/>
      <TodoList>
        {error && <p>Huno un error, lo sentimos...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer ToDo...</p>}

        {searchedTodos.map(todo=>(
          <TodoItem key={todo.id} 
                    id={todo.id} 
                    text={todo.text} 
                    completed={todo.completed} 
                    onComplete={() => toggleCompleteTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                    />
        ))}
      </TodoList>
      <TodoCounter/>
       {!!openModal && (
         <Modal>
          <TodoForm />
         </Modal>
       )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
    );
}

export default AppUI;