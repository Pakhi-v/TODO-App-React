import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Do Yoga at evening', 'Go for a walk']);
  const [input, setInput] = useState('');
  console.log('*',input);

  const addTodo = (event) => {
    // this will fire off when we click the button. 
    event.preventDefault(); //will stop refreshing.
    console.log('+','Its working')
    setTodos([...todos, input]); //...todos indicate what previously is added
    setInput(''); // clear the input after clicking on submit.
  }

  return (
    <div className="App">
      <h1>Hello everyone</h1>
      <form>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button type='submit' onClick={addTodo}>Add Todo</button>
      </form>
    
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
