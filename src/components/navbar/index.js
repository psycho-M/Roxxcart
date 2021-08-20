import React from "react";
import { useSelector } from "react-redux";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  LogoImag,
  IconLink,
} from "./NavbarElements";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import svg from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <>
      <IconContext.Provider
        value={{ style: { fontSize: "30px", color: "#000" } }}
      >
        <Nav>
          <NavLogo to="/">
            <LogoImag src={svg} />{" "}
          </NavLogo>
          <Bars />

          <NavMenu>
            <NavLink to="/" activeStyle>
              Home
            </NavLink>
            <NavLink to="/Shop" activeStyle>
              shop
            </NavLink>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
          </NavMenu>
          <IconLink>
            <Link to="/cart" activeStyle>
              <FiShoppingCart />
            </Link>
            <MdFavoriteBorder />
            <FiUser />
          </IconLink>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
export default Navbar;
