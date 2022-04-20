import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <img
        className="nav__menu-icon"
        src="https://api.iconify.design/charm/menu-hamburger.svg?color=white"
      />
      <h1 className="nav__header">F1</h1>
      <img
        className="nav__settings-icon"
        src="https://api.iconify.design/typcn/spanner.svg?color=white"
      />
    </div>
  );
};

export default Nav;
