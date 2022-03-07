import React  from "react";
import './CreateTodoButton.css';

function CreateTodoButton(){
    
    const onClickButton = (msg) => {
        alert(msg);
    }
    
    return  (
        <button className="CreateTodoButton"
                onClick={()=>onClickButton("Esto deberia aparecer en el modal....")}
        >
            +
        </button>
    );
}

export default CreateTodoButton;