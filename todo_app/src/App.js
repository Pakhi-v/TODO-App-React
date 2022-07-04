import React, { useState, useEffect } from 'react';
import { Button , FormControl, Input, InputLabel} from '@mui/material'
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function App() {
  const [todos, setTodos] = useState(['abc', 'def']);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    // this code will fires when app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);
  

  const addTodo = (event) => {
    // this will fire off when we click the button. 
    event.preventDefault(); //will stop refreshing.
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput(''); // clear the input after clicking on submit.
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
