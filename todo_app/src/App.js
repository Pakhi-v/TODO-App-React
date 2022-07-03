import React, { useState } from 'react';
import { Button , FormControl, Input, InputLabel} from '@mui/material'
import './App.css';
import Todo from './Todo';

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
    console.log(todos);
  }

  return (
    <div className="App">
      <h1>Hello everyone</h1>
      <form>
      {/*input value={input} onChange={event => setInput(event.target.value)}/> */}

      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>

      <Button disabled={!input} type="Submit" onClick={addTodo} variant="contained" color="primary">
         Add Todo
         </Button>
      {/*button type='submit' onClick={addTodo}>Add Todo</button> */}
      </form>
    
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
