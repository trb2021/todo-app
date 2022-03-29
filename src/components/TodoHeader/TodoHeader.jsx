import React from 'react';
import './TodoHeader.css';
import iconSun from '../../assets/images/icon-sun.svg';

function TodoHeader() {
    return (
    <header className="card">
      <h1>TODO MACHINE</h1>
      <button id="theme-switcher">
        <img src={iconSun} alt="Cambiar los colores del tema" />
      </button>
    </header>
    );
}

export default TodoHeader;