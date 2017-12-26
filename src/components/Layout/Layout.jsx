import React from "react";
import Aux from "./../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  state = {
    showSideDrawer: false
  };

  closeSideDrawer = () => {
    this.setState({ showSideDrawer: false });
  };

  openSideDrawer = () => {
    this.setState({ showSideDrawer: true });
  };

  render() {
    const { showSideDrawer } = this.state;
    return (
      <Aux>
        <SideDrawer
          showSideDrawer={showSideDrawer}
          closeSideDrawer={this.closeSideDrawer}
          openSideDrawer={this.openSideDrawer}
        />
        <Toolbar
          showSideDrawer={showSideDrawer}
          openSideDrawer={this.openSideDrawer}
        />
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
