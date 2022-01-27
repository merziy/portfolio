import { React } from "react";
import { Nav, NavLink, Bars, NavMenu } from "./navbar";

const Navbar = () => {
  return (
    <>
      <Nav className="nav">
        <Bars id="hamburger" />

        <NavMenu className="nav-menu">
          <NavLink className="navlinks" to="/" style>
            Home
          </NavLink>{" "}
          |
          <NavLink className="navlinks" to="/portfolio" style>
            Portfolio
          </NavLink>{" "}
          |
          <NavLink className="navlinks" to="/contact" style>
            Contact
          </NavLink>{" "}
          |
          <NavLink className="navlinks" to="/blog" style>
            Blog
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
