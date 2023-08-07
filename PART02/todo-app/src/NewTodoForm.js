import React, { useState, useEffect } from 'react';

const NewTodoForm = ({ addTodo, editingTask, editTodo }) => {
  const [task, setTask] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      editTodo(task);
    } else {
      addTodo({ task });
    }
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Task:
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </label>
      <button>{editingTask ? 'Edit Todo' : 'Add Todo'}</button>
    </form>
  );
};

export default NewTodoForm;
