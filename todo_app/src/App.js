import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Do Yoga at evening', 'Go for a walk']);
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <h1>Hello everyone</h1>
      <input />
      <button>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
