import React from "react";
import './TodoFilter.css';

function TodoFilter() {
    return(
        <>
          <div className="filter">
            <button id="all" className="on">Todos</button>
            <button id="active">Activos</button>
            <button id="completed">Completados</button>
          </div>
          <div className="corner">
            <button id="clear-completed">Borrar completados</button>
          </div>
        </>
    );
}

export default TodoFilter;