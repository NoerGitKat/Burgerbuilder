import React from "react";

import "../../../styles/SideDrawer.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const SideDrawer = ({ showSideDrawer, closeSideDrawer, openSideDrawer }) => {
  const sideDrawerClasses = showSideDrawer
    ? "sideDrawer openMenu"
    : "sideDrawer closeMenu";
  return (
    <Aux>
      <Backdrop
        showOrder={showSideDrawer}
        quitOrderMode={closeSideDrawer}
        openSideDrawer={openSideDrawer}
      />
      <div className={sideDrawerClasses}>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
