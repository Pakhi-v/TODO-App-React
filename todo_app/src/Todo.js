 import { List, ListItem, ListItemText } from '@mui/material'
 import './Todo.css';
import React from 'react'
 
 function Todo(props) {
   return (
     <List>
           <ListItem>
            <ListItemText primary={props.text} secondary="Dummy deadline" />
           </ListItem>
           </List>
   )
 }
 
 export default Todo