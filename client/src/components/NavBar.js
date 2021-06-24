import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();

const Navbar = () => {
  // const deleteJWT = (e) => {
  //   cookies.remove("jwt");
  return (
    <header>
      <img id="logo-main" src={logo} width="50"></img>

      <ul className="nav-links">
        <NavLink className="nav-links" to="/">
          HOME
        </NavLink>

        <NavLink className="nav-links" to="/signup">
          REGISTER
        </NavLink>
        <NavLink className="nav-links" to="/login">
          LOGIN
        </NavLink>

        <NavLink className="nav-links" to="/dashboard">
          DASHBOARD
        </NavLink>
        <NavLink className="nav-links" to="/pets">
          PETS
        </NavLink>

        <NavLink className="nav-links" to="/search">
          SEARCH
        </NavLink>

        {/* <NavLink className="navLink" to="/"> <span onClick={deleteJWT}>LOGOUT</span>   </NavLink> */}
      </ul>
    </header>
  );
};

export default Navbar;
