import React from "react";
import '../styles/TodoItem.css';

function TodoItem (props) {

    const onComplete = () => {
      alert("Tarea completada " + props.text);
    }

    const onDelete = () => {
      alert("Esta seguro que desea eliminar "+ props.text);
    }

    return (
        <li className="TodoItem">
      <span className={`Icon Icon-check 
            ${props.completed && 
            'Icon-check--active'}`     
            }
            onClick={onComplete}
            >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
    );
}

export default TodoItem;