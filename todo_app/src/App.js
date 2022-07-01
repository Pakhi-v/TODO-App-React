import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Do Yoga at evening', 'Go for a walk']);
  const [input, setInput] = useState('');
  console.log('*',input);

  const addTodo = (event) => {
    // this will fire off when we click the button. 
    console.log('+','Its working')
    setTodos([...todos, input]);
  }

  return (
    <div className="App">
      <h1>Hello everyone</h1>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
