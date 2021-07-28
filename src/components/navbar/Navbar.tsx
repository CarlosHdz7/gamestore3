/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);

  return (
    <>
      <div className="navbar">
        <button type="button" className="side-button" onClick={showSideBar}>
          <i className="bi bi-list" />
        </button>

        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/login">
          Login
        </Link>
        <Link className="nav-link" to="/games">
          Games
        </Link>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li role="button" tabIndex={0} className="nav-text" onClick={showSideBar}>
            <i className="bi bi-x-lg" />
          </li>
          <li className="nav-text">
            <Link to="/">
              <i className="bi bi-house-fill" />
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/login">
              <i className="bi bi-person-fill" />
              <span>Login</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/games">
              <i className="bi bi-joystick" />
              <span>Games</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
