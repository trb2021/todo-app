import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import './TodoFilter.css';

function TodoFilter() {
  
  const {setFilterTodo} = useContext(TodoContext);

  const onClickHandler = (element) => {
    setFilterTodo(element.target.id);
  }
  
  return(
        <>
          <div className="filter">
            <button id="all" onClick={onClickHandler}>Todos</button>
            <button id="active" onClick={onClickHandler}>Activos</button>
            <button id="completed" onClick={onClickHandler}>Completados</button>
          </div>
          <div className="corner">
            <button id="clear-completed">Borrar completados</button>
          </div>
        </>
    );
}

export default TodoFilter;