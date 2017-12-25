import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "../../../styles/BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const allControls = controls.map(control => {
  return (
    <BuildControl
      key={control.label}
      label={control.label}
      type={control.type}
    />
  );
});

console.log("buildcontrols", allControls);

const BuildControls = () => {
  return <div className="buildControls">{allControls}</div>;
};

export default BuildControls;
