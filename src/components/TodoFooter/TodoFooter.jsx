import React from "react";
import './TodoFooter.css';

function TodoFooter({ children, loading }) {
    return(
        <div className="TodoFooter card">
            {  
                React.Children
                    .toArray(children)
                    .map(child => React.cloneElement(child, {loading}))
            }
        </div>
    );
}

export default TodoFooter; 