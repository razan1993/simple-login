import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <div className="menu">
      <ul class="">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
        <li>
          <Link to="/todo-list">todo-list</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
