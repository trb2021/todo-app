import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import './TodoCounter.css';

function TodoCounter () {
    const {totalTodos, completedTodos} = useContext(TodoContext);
    return (
        <div className="card TodoCounter">
            <p className="corner">Has completado {completedTodos} de {totalTodos} TODOs</p>
        </div>
    )
}

export default TodoCounter;