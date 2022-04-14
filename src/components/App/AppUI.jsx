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
import TodoCounter from "../TodoCounter/TodoCounter";
import TodoFilter from "../TodoFilter/TodoFilter";


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
    totalTodos, 
    completedTodos,
    setFilterTodo, 
    deleteCompletedTodos,
    darkMode, 
    toggleDarkMode,
} = useContext(TodoContext);

    return(
      <>
      <TodoHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <TodoSearch/>
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
          <TodoForm />
         </Modal>
       )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>  
    );
}

export default AppUI;