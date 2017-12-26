import React from "react";
import "../../../styles/Backdrop.css";

const Backdrop = ({ showOrder, quitOrderMode, showSideDrawer }) => {
  return showOrder ? (
    <div onClick={quitOrderMode} className="backdrop" />
  ) : null;
};

export default Backdrop;
