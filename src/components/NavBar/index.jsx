import React from 'react';
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, ABOUT } from '../../constants/Routes';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <NavLink to={HOME_ROUTE}>home</NavLink>
      <NavLink to={ABOUT}>about</NavLink>
    </nav>
  );
}

export default NavBar;
