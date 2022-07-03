 import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
 
 function Todo(props) {
   return (
     <List>
           <ListItem>
            <ListItemText primary="Todo:" secondary={props.text} />
           </ListItem>
           </List>
   )
 }
 
 export default Todo