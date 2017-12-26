import React from "react";

import Aux from "../../hoc/Aux";
import Layout from "../../components/Layout/Layout";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.8,
  cheese: 0.7,
  meat: 1.3
};

class Burgerbuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    orderMode: false
  };

  updatePurchaseState = ingredients => {
    const sumPrice = Object.keys(ingredients)
      .map(ingredientKey => {
        return ingredients[ingredientKey];
      })
      .reduce((sum, price) => {
        return sum + price;
      }, 0);
    this.setState({ purchaseable: sumPrice > 0 });
  };

  addIngredients = type => {
    //save current value (because state = immutible)
    const oldAmount = this.state.ingredients[type];
    //add one to current value
    const newAmount = oldAmount + 1;

    //here ingredients obj is changed to later be used to
    //rewrite state
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newAmount;

    const addToPrice = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + addToPrice;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredients = type => {
    const oldAmount = this.state.ingredients[type];
    const newAmount = oldAmount - 1;
    if (oldAmount <= 0) {
      return;
    }
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newAmount;

    const addToPrice = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - addToPrice;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  };

  checkoutBurger = () => {
    this.setState({ orderMode: true });
  };

  quitOrderMode = () => {
    this.setState({ orderMode: false });
  };

  continuePurchase = () => {
    alert("Proceeding to buy this tasty shit...");
  };

  render() {
    const { ingredients, totalPrice, purchaseable, orderMode } = this.state;
    //populates ingredients obj with boolean values
    //ex. { salad: true, meat: false }
    const disabledInfo = {
      ...ingredients
    };
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal quitOrderMode={this.quitOrderMode} showOrder={orderMode}>
          <OrderSummary
            totalPrice={totalPrice}
            quitOrderMode={this.quitOrderMode}
            continuePurchase={this.continuePurchase}
            ingredients={ingredients}
          />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          totalPrice={totalPrice}
          addIngredients={this.addIngredients}
          removeIngredients={this.removeIngredients}
          disabled={disabledInfo}
          purchaseable={purchaseable}
          checkoutBurger={this.checkoutBurger}
        />
      </Aux>
    );
  }
}

export default Burgerbuilder;
