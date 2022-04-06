import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import './TodoCounter.css';

function TodoCounter () {
    const {totalTodos, completedTodos} = useContext(TodoContext);
    return (
           <p className="corner">Restan {totalTodos - completedTodos} de {totalTodos} TODOs</p>           
    )
}

export default TodoCounter;