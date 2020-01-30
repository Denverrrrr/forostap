import React from "react";
import { Link } from "react-router-dom";

import "./header.sass";

const Header = () => {
  return (
    <header className="header">
      <Link to="/about">
        <div className="about">About</div>
      </Link>
      <Link to="/">
        <div className="siteLogo">givebat</div>
      </Link>
    </header>
  );
};
export default Header;
