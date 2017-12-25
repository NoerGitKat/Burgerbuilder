import React from "react";
import "../../../../styles/BuildControl.css";

const BuildControl = ({label}) => {
  return (
    <div className="buildControl">
      <label className="label">{label}</label>
      <button className="less">Less</button>
      <button className="more">More</button>
    </div>
  );
};

export default BuildControl;
