/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { HOME_ROUTE, ABOUT } from '../../constants/Routes';
// import './NavBar.css';

import { VscBracketDot } from 'react-icons/vsc';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  NavbarContainer,
  NavbarWrapper,
  IconLogo,
  MenuItemLink,
  Menu,
  MenuItem,
  IconLogoMobile,
} from './Navbar.elements';
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
  const [click, setClick] = useState(true);

  const changeClick = () => {
    setClick(!click);
  };
  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <IconLogo>
            <VscBracketDot size="2em" />
            tu portal
          </IconLogo>

          <IconLogoMobile onClick={() => changeClick()}>
            {click ? <FaTimes /> : <FaBars />}
          </IconLogoMobile>

          <Menu click={click}>
            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink>HOME</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink>ABOUT</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink>SERVICIOS</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink>CONTACTO</MenuItemLink>
            </MenuItem>
          </Menu>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
}
export default Navbar;
