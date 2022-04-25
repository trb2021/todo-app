import React from "react";
import './TodoCounter.css';

function TodoCounter ({totalTodos, completedTodos, loading}) {
    return (
           <p className={`corner ${!!loading && "TodoCounter--loading"}`} >Restan {totalTodos - completedTodos} de {totalTodos} TODOs</p>           
    )
}

export default TodoCounter;