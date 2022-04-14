import React from "react";

function TodoFilter({setFilterTodo, deleteCompletedTodos}) {
  
  const onClickHandler = (element) => {
    setFilterTodo(element.target.id);
    document.querySelector(".on").classList.remove("on");
    document.querySelector("#"+element.target.id).classList.add("on");    
  }
  
  return(
        <>
          <div className="filter">
            <button id="all" className="on" onClick={onClickHandler}>Todos</button>
            <button id="active" onClick={onClickHandler}>Activos</button>
            <button id="completed" onClick={onClickHandler}>Completados</button>
          </div>
          <div className="corner">
            <button id="clear-completed" onClick={deleteCompletedTodos}>Borrar completados</button>
          </div>
        </>
    );
}

export default TodoFilter;