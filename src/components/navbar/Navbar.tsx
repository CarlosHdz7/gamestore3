/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SideBarOptions from './SidebarOptions';
import './Navbar.scss';
import useAuth from '../../hooks/useAuth';
import SideButton from '../sideButton';

const Navbar = () => {
  const [sidebar, setSideBar] = useState<boolean>(false);
  const [containerState, setContainerState] = useState(true);
  const history = useHistory();

  const { getUser, logout } = useAuth();
  const storedValue = getUser();

  const showSideBar = () => setSideBar(!sidebar);

  const logoutUser = async () => {
    await logout('user');
    history.push('/login');
  };

  // eslint-disable-next-line no-unused-vars
  const handleShowLogout = () => {
    setContainerState(!containerState);
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
          <div className="d-flex">
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
                <div className="userSession">
                  <button
                    type="button"
                    className="navbar-options__item--button"
                    onClick={handleShowLogout}
                  >
                    carlos-hernandez
                    {' '}
                    {(containerState) ? <i className="bi bi-caret-down-fill" /> : <i className="bi bi-caret-up-fill" />}
                  </button>
                  <div className={(containerState) ? 'logout-button-container d-none' : 'logout-button-container'}>
                    <a
                      href="/#"
                      className="navbar-options__item logout-button"
                      onClick={logoutUser}
                    >
                      <i className="bi bi-door-open-fill" />
                      {' '}
                      Logout
                    </a>
                  </div>
                </div>
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
            <SideButton
              key={item.id}
              id={item.id}
              icon={item.icon}
              path={item.path}
              title={item.title}
              showSideBar={showSideBar}
              logoutUser={logoutUser}
              storedValue={storedValue}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
