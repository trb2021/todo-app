import React from "react";
import './TodoItem.css';
import iconDelete from '../../assets/images/icon-cross.svg';

function TodoItem (itemProps) {
    return (
        <li className="card">
      <span className={`Icon Icon-check 
            ${itemProps.completed && 
            'Icon-check--active'}`     
            }
            onClick={itemProps.onComplete}
            >
        √
      </span>
      <p className={`TodoItem-p ${itemProps.completed && 'TodoItem-p--complete'}`}>
        {itemProps.text}
      </p>
      <button className="clear" onClick={itemProps.onDelete}>
        <img src={iconDelete} alt="Eliminar" />
      </button>
    </li>
    );
}

export default TodoItem;