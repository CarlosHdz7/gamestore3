/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SideBarOptions from './SidebarOptions';
import './Navbar.scss';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const [sidebar, setSideBar] = useState<boolean>(false);
  const history = useHistory();

  const { getUser, logout } = useAuth();
  const storedValue = getUser();

  const showSideBar = () => setSideBar(!sidebar);
  const logoutUser = () => {
    logout('user');
    history.push('/login');
  };

  return (
    <>
      <div className="navbar">
        <button type="button" className="side-button" onClick={showSideBar}>
          <i className="bi bi-list" />
        </button>
        <div className="navbar-container-options">
          <Link className="navbar-container-item" to="/">
            GameStore
          </Link>
          <div>
            <Link className="navbar-container-item" to="/games">
              Games
            </Link>
            {
              !storedValue && (
                <Link className="navbar-container-item" to="/login">
                  Login
                </Link>
              )
            }
            {
              storedValue && (
                <button type="button" className="navbar-container-item" onClick={logoutUser}>
                  Logout
                </button>
              )
            }
          </div>
        </div>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

        <ul className="nav-menu-items">
          <button type="button" className="nav-text--button" onClick={showSideBar}>
            <i className="bi bi-x-lg" />
          </button>
          {SideBarOptions.map((item) => (
            <li className="nav-text" key={item.id} onClick={showSideBar}>
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
