import React from "react";
import './TodoFooter.css';

function TodoFooter({ children }) {
    return(
        <div className="TodoFooter card">
            { children }
        </div>
    );
}

export default TodoFooter;