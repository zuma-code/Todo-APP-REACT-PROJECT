import React, { useState } from "react";
import "./styles/TodoForm.css";
import { Navigate } from "react-router-dom";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return; // Prevent empty todos
    addTodo(text);
    setText(""); // Clear input after submission
  };
  

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-field"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="submit-btn">Add Todo</button>
    </form>
  );
};

export default TodoForm;
