import React from "react";
import "../../styles/Toolbar.css";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";

const Toolbar = ({ showSideDrawer, openSideDrawer }) => {
  return (
    <header className="toolbar">
      {showSideDrawer ? null : (
        <div
          onClick={openSideDrawer}
          className="sideDrawerMenu"
          style={{ cursor: "pointer" }}
        >
          MENU
        </div>
      )}
      <div className="noDesktop">
        <Logo />
      </div>

      <nav className="noDesktop">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
