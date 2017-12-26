import React from "react";
import "../../../styles/NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <ul className="navigationItems">
      <NavigationItem link="/" active={true}>
        Some link
      </NavigationItem>
      <NavigationItem link="/buy">Another link</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
