import React  from "react";
import '../styles/CreateTodoButton.css';

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