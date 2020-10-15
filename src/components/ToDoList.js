import React from 'react';
import ToDoListItem from './ToDoListItem';
import './ToDoList.css'

function ToDoList({todos,onRemove,onToggle}) {
  console.log(todos);
  return (
      <div className="ToDoList">
        {
          todos.map(todo=>(
            <ToDoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>
          ))
        }
     </div>
  );
}
export default ToDoList;
