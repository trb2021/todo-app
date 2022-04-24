import React from "react";
import './TodoList.css';

function TodoList(props){
    return (
        <section className="todos">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.filteredTodos.length) && props.onEmptyTodos()}
            <ul>
            {props.filteredTodos.map(props.render)}
            </ul>
        </section>
    );
}

export default TodoList;