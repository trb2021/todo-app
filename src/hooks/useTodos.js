import { useState } from "react";
import useLocalStorage from "./useLocalStorage";



function useTodos () {
    
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);      
      
      const [searchValue, setSearchValue] = useState('')

      const [openModal, setOpenModal] = useState(false);

      const [darkMode, setDarkMode] = useState(true);

      const [filterTodo, setFilterTodo] = useState('all');
    
      const completedTodos = todos.filter(todo=>!!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];

      let filteredTodos = [];
    
      if (!searchValue.length>=1) {
        searchedTodos = todos;
      } else {
          searchedTodos = todos.filter(todo=>{
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        })
      }
    
      if (filterTodo === 'all') filteredTodos = searchedTodos; 
      else
      if (filterTodo === 'active') {
        filteredTodos = searchedTodos.filter(todo => {
          return !todo.completed;
        }); 
      } else {
        filteredTodos = searchedTodos.filter(todo => {
          return todo.completed;
        });
      }

      const toggleDarkMode = () => {
        document.querySelector("body").classList.toggle("light");
        setDarkMode(!darkMode);
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

      const deleteCompletedTodos = () => {
        const activeTodos = todos.filter(todo => !todo.completed);
        saveTodos(activeTodos);
      }

      return (
        {
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            filterTodo,
            setFilterTodo,
            filteredTodos,
            toggleCompleteTodo,
            toggleDarkMode,
            deleteTodo,
            deleteCompletedTodos,
            openModal,
            setOpenModal,
            addTodo,
            darkMode
        }
      );
}

export { useTodos };