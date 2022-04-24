import React from "react";
import './TodoList.css';

function TodoList(props){
    const renderFunction = props.children || props.render;

    return (
        <section className="todos">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {(!!props.totalTodos && !props.filteredTodos.length) && props.onEmptySearchTodos()}
            <ul>
            {props.filteredTodos.map(renderFunction)}
            </ul>
        </section>
    );
}

export default TodoList;