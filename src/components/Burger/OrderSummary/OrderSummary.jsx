import React from "react";

import Aux from "../../../hoc/Aux";
import "../../../styles/Button.css";

const OrderSummary = ({
  totalPrice,
  ingredients,
  quitOrderMode,
  continuePurchase
}) => {
  const ingredientSummary = Object.keys(ingredients).map((ingrKey, i) => {
    return (
      <li key={ingrKey + i}>
        <span style={{ textTransform: "capitalize" }}>{ingrKey}</span>:{" "}
        {ingredients[ingrKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Order Summary</h3>
      <p>This delicious burger has the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Total price: &euro;{totalPrice.toFixed(2)}</p>
      <p>Proceed to checkout?</p>
      <button onClick={quitOrderMode} className="button danger">
        CANCEL
      </button>
      <button onClick={continuePurchase} className="button success">
        CONTINUE
      </button>
    </Aux>
  );
};

export default OrderSummary;
