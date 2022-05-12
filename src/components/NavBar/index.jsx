/* eslint-disable react/jsx-no-useless-fragment */
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { HOME_ROUTE, ABOUT } from '../../constants/Routes';
// import './NavBar.css';

import { VscBracketDot } from 'react-icons/vsc';
import { NavbarContainer, NavbarWrapper, IconLogo } from './Navbar.elements';
// function NavBar() {
//   return (
//     <nav>
//       <NavLink to={HOME_ROUTE}>home</NavLink>
//       <NavLink to={ABOUT}>about</NavLink>
//     </nav>
//   );
// }

// export default NavBar;
function Navbar() {
  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <IconLogo>
            <VscBracketDot size="2em" />
            tu portal
          </IconLogo>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
}
export default Navbar;
