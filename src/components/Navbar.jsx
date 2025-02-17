// src/components/Navbar.js
import React from 'react';
import './styles/Navbar.css'; // Import the CSS for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Todo List</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

