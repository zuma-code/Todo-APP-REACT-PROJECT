// src/components/Sidebar.js
import React from 'react';
import './styles/Sidebar.css'; // Import the CSS for Sidebar

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3>Todo Filters</h3>
      <br />
      <ul>
        <li><a href="#">All Todos</a></li>
        <li><a href="#">Active Todos</a></li>
        <li><a href="#">Completed Todos</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;

