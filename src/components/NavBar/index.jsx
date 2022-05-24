/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import { VscBracketDot } from 'react-icons/vsc';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '../../context/authContext';
import { HOME_ROUTE, LOGIN, FORM_TEMPLATE, REGISTER } from '../../constants/Routes';
import {
  NavbarContainer,
  NavbarWrapper,
  IconLogo,
  MenuItemLink,
  Menu,
  MenuItem,
  IconLogoMobile,
} from './Navbar.elements';

function Navbar() {
  const navigate = useNavigate();
  const [click, setClick] = useState(true);
  const { user, logOut } = useAuth();
  const handleLogout = async () => {
    await logOut();
  };
  const changeClick = () => {
    setClick(!click);
  };
  const changeNav = () => {
    navigate(`/youPortal/${user.uid}`);
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
              <MenuItemLink>
                <NavHashLink to={HOME_ROUTE}>
                  HOME
                </NavHashLink>
              </MenuItemLink>
            </MenuItem>

            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink>ABOUT</MenuItemLink>
            </MenuItem>

            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink>SERVICIOS</MenuItemLink>
            </MenuItem>

            {user ? (
              <>
                <MenuItem onClick={() => changeNav()}>
                  <MenuItemLink><NavLink to={FORM_TEMPLATE}>inicia</NavLink></MenuItemLink>
                </MenuItem>
                <MenuItem onClick={() => changeClick()}>
                  <MenuItemLink><NavLink to={FORM_TEMPLATE}>formulario</NavLink></MenuItemLink>
                </MenuItem>
                <MenuItem onClick={() => changeClick()}>
                  <MenuItemLink onClick={handleLogout}>Cerrar Sesion</MenuItemLink>
                </MenuItem>
              </>
            )
              : (
                <>
                  <MenuItem onClick={() => changeClick()}>
                    <MenuItemLink><NavLink to={LOGIN}>Iniciar Sesion</NavLink></MenuItemLink>
                  </MenuItem>
                  <MenuItem onClick={() => changeClick()}>
                    <MenuItemLink><NavLink to={REGISTER} data-cy="register">Registrarse</NavLink></MenuItemLink>
                  </MenuItem>
                </>
              )}
          </Menu>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
}
export default Navbar;
