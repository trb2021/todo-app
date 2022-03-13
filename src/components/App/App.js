import React from 'react';
import { TodoProvider } from '../../context/TodoContext';
import AppUI from './AppUI';

/*const defaultTodos = [
  { id:1, text: 'Cortar cebolla', completed: false },
  { id:2, text: 'Tomar el curso de intro a React de Platzi', completed: false },
  { id:3, text: 'Llorar con la llorona', completed: true },
  { id:4, text: 'Actualizar la BD de eventos', completed: true },
];*/

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
