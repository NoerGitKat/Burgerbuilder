import React from "react";
import "../../styles/Toolbar.css";
import Logo from "../Logo/Logo";

const Toolbar = () => {
  return (
    <header className="toolbar">
      <Logo />
      <div>MENU</div>

      <nav>
        <ul>
          <li>site link</li>
          <li>site link</li>
          <li>site link</li>
        </ul>
      </nav>
    </header>
  );
};

export default Toolbar;
