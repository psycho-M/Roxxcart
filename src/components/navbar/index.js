import React from "react";
import { Nav, NavLogo, NavLink, Bars, NavMenu } from "./NavbarElements";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <IconContext.Provider
        value={{ style: { fontSize: "30px", color: "#000" } }}
      >
        <Nav>
          <NavLogo to="/">RoxxCart</NavLogo>
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
            <NavLink to="/contact" activeStyle>
              Contact
            </NavLink>
          </NavMenu>
          <Link to="/cart" activeStyle>
            <FiShoppingCart />
          </Link>
          <MdFavoriteBorder />
          <FiUser />
        </Nav>
      </IconContext.Provider>
    </>
  );
};
export default Navbar;
