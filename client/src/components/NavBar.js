import React from 'react';
//import Logo from '../assets/Asset_3.svg';

const Navbar = () => {
  return (
    <header>
      <div id="logo-main-container">
        {/* <img id="logo-main" src={Logo} width="50"></img> */}
      </div>

      <ul className="nav-links">
        <li>
          <a
            href="https://coralfussman.medium.com/atlantis-47639b78d34d"
            target="_blank"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/atlantis-cache"
            target="_blank"
          >
            Login
          </a>
        </li>
        <li>
          <a href="#field">Dashboard</a>
        </li>
        <li>
          <a href="#team">Search</a>
        </li>
        <li>
          <a href="https://github.com/oslabs-beta/Atlantis" target="_blank">
            GITHUB
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
