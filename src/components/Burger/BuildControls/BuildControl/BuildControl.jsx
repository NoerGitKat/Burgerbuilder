import React from "react";
import "../../../../styles/BuildControl.css";

const BuildControl = ({
  disabled,
  label,
  addIngredients,
  removeIngredients
}) => {
  return (
    <div className="buildControl">
      <label className="label">{label}</label>
      <button className="less" onClick={removeIngredients} disabled={disabled}>
        Less
      </button>
      <button className="more" onClick={addIngredients}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
