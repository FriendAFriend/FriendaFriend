import React from 'react';
import { NavLink } from 'react-router-dom';

// import Cookies from 'universal-cookie';
// const cookies = new Cookies();

const Navbar = () => {
  // const deleteJWT = (e) => {
  //   cookies.remove("jwt");
  return (
    <header>
      <div id="logo-main-container">
        {/* <img id="logo-main" src={Logo} width="50"></img> */}
      </div>

      <ul className="nav-links">
        <NavLink className="navLink" to="/">
          HOME
        </NavLink>

        <NavLink className="navLink" to="/signup">
          REGISTER
        </NavLink>
        <NavLink className="navLink" to="/login">
          LOGIN
        </NavLink>

        <NavLink className="navLink" to="/dashboard">
          DASHBOARD
        </NavLink>
        <NavLink className="navLink" to="/pets">
          PETS
        </NavLink>

        <NavLink className="navLink" to="/search">
          SEARCH
        </NavLink>

        {/* <NavLink className="navLink" to="/"> <span onClick={deleteJWT}>LOGOUT</span>   </NavLink> */}
      </ul>
    </header>
  );
};

export default Navbar;
