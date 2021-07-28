/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBarOptions from './SidebarOptions';
import './Navbar.scss';

const Navbar = () => {
  const [sidebar, setSideBar] = useState<boolean>(false);
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
        <Link className="nav-link" to="/games/1">
          Details
        </Link>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li role="button" tabIndex={0} className="nav-text" onClick={showSideBar}>
            <i className="bi bi-x-lg" />
          </li>

          {SideBarOptions.map((item) => (
            <li className="nav-text">
              <Link to={item.path}>
                <i className={item.icon} />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}

        </ul>
      </nav>
    </>
  );
};

export default Navbar;
