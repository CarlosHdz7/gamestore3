import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link className="nav-link" to="/">
      Home
    </Link>
    <Link className="nav-link" to="/login">
      Login
    </Link>
    <Link className="nav-link" to="/games">
      Games
    </Link>
  </nav>
);

export default Navbar;
