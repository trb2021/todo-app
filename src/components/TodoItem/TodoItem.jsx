import React from "react";
import './TodoItem.css';

function TodoItem (itemProps) {
    return (
        <li className="TodoItem">
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
      <span className="Icon Icon-delete" onClick={itemProps.onDelete}>
        X
      </span>
    </li>
    );
}

export default TodoItem;