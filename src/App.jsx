// src/App.js
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'; 

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import NotFound from './pages/NotFoundPage';
import data from './data/todos.json';
const App = () => {
  const [todos, setTodos] = useState([]);

    // Fetch JSON data when the component mounts
    useEffect(() => {
      setTodos(data); // Use the static imported data
    }, []);
  

  const addTodo = (text) => {
    const newTodo = { id: todos.length + 1, text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className='App'>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ display: 'flex', flex: 1 }}>
       

        <Sidebar />
        <main style={{ flex: 1, padding: '20px' }}>
          <TodoForm addTodo={addTodo} />
          <div>
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}
              />
            ))}
          </div>
       <Routes>         
        <Route path="*" element={ <NotFound /> } />      
      </Routes>
        </main>
      </div>
      <Footer />
    </div>
    </div> 
  );
};

export default App;
