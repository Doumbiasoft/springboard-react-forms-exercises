import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTodo = (todoData) => {
    setTodos([...todos, {...todoData, id:uuid()}]);
  };

const editTodo = (newTask) => {
    const editedTodos = todos.map((todo) =>
      todo.task === editingTask ? { ...todo, task: newTask } : todo
    );
    setTodos(editedTodos);
    setEditingTask(null);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    setTodos(newTodos.filter(toto => toto.id !== id));
  };

  return (
    <div>
      <NewTodoForm
       addTodo={addTodo}
       editTodo={editTodo}
       editingTask={editingTask}
      />
      {todos.map((todo) => (
        <Todo
          id={todo.id}
          key={todo.id}
          task={todo.task}
          onEdit={setEditingTask}
          onRemove={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
