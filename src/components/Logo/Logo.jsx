import React from "react";
import logo from "../../images/cheese-burger-favicon.png";
import "../../styles/Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
