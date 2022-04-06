import React from "react";
import TodoCounter from "../TodoCounter/TodoCounter";
import TodoFilter from "../TodoFilter/TodoFilter";
import './TodoFooter.css';

function TodoFooter() {
    return(
        <div className="TodoFooter card">
            <TodoCounter/>
            <TodoFilter/>
        </div>
    );
}

export default TodoFooter;