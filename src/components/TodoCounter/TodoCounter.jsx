import React from "react";
import './TodoCounter.css';

function TodoCounter ({totalTodos, completedTodos}) {
    return (
           <p className="corner">Restan {totalTodos - completedTodos} de {totalTodos} TODOs</p>           
    )
}

export default TodoCounter;