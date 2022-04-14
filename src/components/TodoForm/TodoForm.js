import React, { useState } from "react";
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal }) {
    
    const [newTodoValue, setNewTodoValue] = useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
     }
    
    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder="Cortar la cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    className="TodoForm-button TodoForm-button--cancel" 
                    type="button" onClick={onCancel}>
                        Cancelar
                    </button>
                <button 
                    type="submit" 
                    className="TodoForm-button TodoForm-button--add">
                        Adicionar
                </button>
            </div>            
        </form>
    );
}

export default TodoForm;