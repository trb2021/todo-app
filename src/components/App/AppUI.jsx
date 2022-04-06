import React, { useContext } from "react";
import TodoSearch from '../TodoSearch/TodoSearch';
import TodoList from '../TodoList/TodoList';
import TodoItem from '../TodoItem/TodoItem';
import CreateTodoButton from '../CreateTodoButton/CreateTodoButton';
import { TodoContext } from "../../context/TodoContext";
import Modal from "../Modal/ModalAddTodo";
import TodoForm from "../TodoForm/TodoForm";
import TodoHeader from "../TodoHeader/TodoHeader";
import './AppUI.css';
import TodoFooter from "../TodoFooter/TodoFooter";


function AppUI () {

  const {
    loading,
    error,    
    searchedTodos,
    filteredTodos,
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
        {error && <p>Hubo un error, lo sentimos...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer ToDo...</p>}

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
      <TodoFooter/>
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