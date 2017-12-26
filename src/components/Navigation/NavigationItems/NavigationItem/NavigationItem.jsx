import React from "react";
import "../../../../styles/NavigationItem.css";

const NavigationItem = ({ link, active, children }) => {
  return (
    <li className="navigationItem">
      <a href={link} className={active ? "active" : null}>
        {children}
      </a>
    </li>
  );
};

export default NavigationItem;
