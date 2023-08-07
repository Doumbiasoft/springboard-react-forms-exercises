import React from 'react';
import './Todo.css'

const Todo = ({ id, task, onEdit, onRemove }) => {
  return (
    <div className="Todo">
      {task}
      <button className='Todo-btn' onClick={() => onEdit(task)}>Edit</button>
      <button className='Todo-btn' onClick={() => onRemove(id)}>X</button>
    </div>
  );
};

export default Todo;
