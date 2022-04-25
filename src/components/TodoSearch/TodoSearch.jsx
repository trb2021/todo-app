import React from 'react';
import './TodoSearch.css';

function TodoSearch ({ searchValue, setSearchValue,loading }) {
    
    const onSearchValueChange  = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    
    return (
        <>
            <input className="TodoSearch card" 
            placeholder="Que tarea quieres buscar..."
            value={searchValue} 
            onChange={onSearchValueChange}
            disabled={loading}
            />
        </>
    );
}

export default TodoSearch;
