import React from "react";

import Aux from "../../hoc/Aux";
import Layout from "../../components/Layout/Layout";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class Burgerbuilder extends React.Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  };

  render() {
    const { ingredients } = this.state;
    return (
      <Aux>
        <Burger ingredients={ingredients} />
        <BuildControls />
      </Aux>
    );
  }
}

export default Burgerbuilder;
