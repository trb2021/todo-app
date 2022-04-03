import React, { useContext } from 'react';
import './TodoHeader.css';
import iconSun from '../../assets/images/icon-sun.svg';
import iconMoon from '../../assets/images/icon-moon.svg';
import  { TodoContext } from '../../context/TodoContext';

function TodoHeader() {
    
    const {darkMode, toggleDarkMode} = useContext(TodoContext);
    
    return (
    <header className="card">
      <h1>TODO MACHINE</h1>
      <button id="theme-switcher" onClick={toggleDarkMode}>
        <img src={ darkMode ? iconSun : iconMoon} alt="Cambiar los colores del tema" />
      </button>
    </header>
    );
}

export default TodoHeader;