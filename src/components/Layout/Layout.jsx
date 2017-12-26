import React from "react";
import Aux from "./../../hoc/Aux";
import Toolbar from "..//Navigation/Toolbar";

const Layout = props => (
  <Aux>
    <Toolbar />
    <main>{props.children}</main>
  </Aux>
);

export default Layout;
