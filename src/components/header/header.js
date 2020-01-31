import React from "react";
import { Link } from "react-router-dom";
/* import styled from 'styled-components' */

import "./header.scss";


const Header = () => {
  return (
    <header className="header"> 
      <Link to="/about">
        <div className="about">About</div>
      </Link>
      <Link to="/">
        <h2 className="siteLogo">givebat</h2>
      </Link>
    </header>
  );
};


export default Header;
