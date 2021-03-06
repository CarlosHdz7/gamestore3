import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.scss';

const Breadcrumb = ({ name }: {name: string}) => (
  <ul className="breadcrumb">
    <li className="breadcrumb-nav">
      <Link to="/" className="breadcrumb-link">
        GameStore
      </Link>
    </li>
    <li className="breadcrumb-nav">
      <Link to="/games" className="breadcrumb-link">
        Games
      </Link>
    </li>
    <li className="breadcrumb-nav">{name}</li>
  </ul>
);

export default Breadcrumb;
