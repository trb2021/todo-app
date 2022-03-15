import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = createContext();

function TodoProvider (props) {
    
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      
      const [searchValue, setSearchValue] = useState('')

      const [openModal, setOpenModal] = useState(false);
    
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
    
     const addTodo = (text) => {
        const newTodos = [...todos];
        let id = 1;
        if (todos.length >0) {
           id = newTodos[todos.length-1].id+1;           
        }         
        newTodos.push({
          id: id,
          completed: false,
          text: text
        })
        saveTodos(newTodos);    
      }

      const deleteTodo = (todoId) => {
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);    
      }

      return (
        <TodoContext.Provider value = {{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
      );
}

export { TodoContext, TodoProvider };