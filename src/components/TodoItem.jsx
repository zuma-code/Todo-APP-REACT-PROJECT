// src/components/TodoItem.js
import React from 'react';
import './styles/TodoItem.css'; // Import the CSS for TodoItem

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <h4>{todo.text}</h4>
      <button onClick={() => toggleComplete(todo.id)} className="complete-btn">
        {todo.completed ? 'Undo' : 'Done'} 
      </button>
      <button onClick={() => removeTodo(todo.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
