import React from "react";
import './TodoList.css';

function TodoList(props){
    return (
        <section className="todos">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export default TodoList;