import React from "react";
import "../../../styles/Backdrop.css";

const Backdrop = ({ showOrder, quitOrderMode }) => {
  return showOrder ? (
    <div onClick={quitOrderMode} className="backdrop" />
  ) : null;
};

export default Backdrop;
