import React from "react";
import './TodoFilter.css';

function TodoFilter() {
  
  const handleOnClick = (item) => {
    console.log(item.event.target);    
  }

  return(
        <>
          <div className="filter">
            <button id="all" onClick={handleOnClick}>Todos</button>
            <button id="active" onClick={handleOnClick}>Activos</button>
            <button id="completed" onClick={handleOnClick}>Completados</button>
          </div>
          <div className="corner">
            <button id="clear-completed">Borrar completados</button>
          </div>
        </>
    );
}

export default TodoFilter;