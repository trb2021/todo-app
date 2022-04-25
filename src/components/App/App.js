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
import TodosError from '../TodosError/TodosError';
import TodosLoading from '../TodosLoading/TodosLoading';
import TodosEmpty from '../TodosEmpty/TodosEmpty';
import EmptySearchTodos from '../EmptySearchTodos/EmptySearchTodos';


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
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} loading={loading}/>
      
      {/* <TodoList 
        error = {error}
        loading = {loading}
        totalTodos = {totalTodos}
        filteredTodos = {filteredTodos}
        onError= {()=><TodosError/>}
        onLoading= {()=><TodosLoading/>}
        onEmptyTodos= {()=><TodosEmpty/>}
        onEmptySearchTodos= {()=><EmptySearchTodos searchText={searchValue}/>}
        render={todo => (
          <TodoItem key={todo.id} 
                    id={todo.id} 
                    text={todo.text} 
                    completed={todo.completed} 
                    onComplete={() => toggleCompleteTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                    />
        )}
      /> */}

      <TodoList
        error = {error}
        loading = {loading}
        totalTodos = {totalTodos}
        filteredTodos = {filteredTodos}
        onError= {()=><TodosError/>}
        onLoading= {()=><TodosLoading/>}
        onEmptyTodos= {()=><TodosEmpty/>}
        onEmptySearchTodos= {()=><EmptySearchTodos searchText={searchValue}/>}
      >
        {todo => (
          <TodoItem key={todo.id} 
            id={todo.id} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => toggleCompleteTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>

      
      
      {/* <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <TodosEmpty />}

        {filteredTodos.map(todo=>(
          <TodoItem key={todo.id} 
                    id={todo.id} 
                    text={todo.text} 
                    completed={todo.completed} 
                    onComplete={() => toggleCompleteTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                    />
        ))}
      </TodoList> */}
      <TodoFooter>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} loading={loading}/>
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
