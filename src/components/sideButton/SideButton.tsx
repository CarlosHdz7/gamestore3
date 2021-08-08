/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { Link } from 'react-router-dom';

const SideButton = ({
  id, path, icon, title, showSideBar, logoutUser, storedValue,
}: any) => ((id === 3)
  ? (
    <li className="nav-text" key={id} onClick={(!storedValue) ? showSideBar : logoutUser}>
      <Link to={path}>
        <i className={icon} />
        <span>{ (!storedValue) ? title : 'Logout'}</span>
      </Link>
    </li>
  )
  : (
    <li className="nav-text" key={id} onClick={showSideBar}>
      <Link to={path}>
        <i className={icon} />
        <span>{title}</span>
      </Link>
    </li>
  ));

export default SideButton;
