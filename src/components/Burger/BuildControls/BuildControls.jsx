import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "../../../styles/BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = ({
  totalPrice,
  addIngredients,
  removeIngredients,
  disabled
}) => {
  return (
    <div className="buildControls">
      <p>Current price: &euro; {totalPrice.toFixed(2)}</p>
      {controls.map(control => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            addIngredients={() => addIngredients(control.type)}
            removeIngredients={() => removeIngredients(control.type)}
            disabled={disabled[control.type]}
          />
        );
      })}
    </div>
  );
};

export default BuildControls;
