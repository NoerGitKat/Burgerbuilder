import React from "react";
import "../../../styles/Modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ showOrder, children, quitOrderMode }) => {
  return (
    <Aux>
      <Backdrop quitOrderMode={quitOrderMode} showOrder={showOrder} />

      <div
        className="modal"
        style={{
          transform: showOrder ? "translateY(0)" : "translateY(-100vh)",
          opacity: showOrder ? "1" : "0"
        }}
      >
        <div className="closeBtn" onClick={quitOrderMode}>&#x274C;</div>
        {children}
      </div>
    </Aux>
  );
};

export default Modal;
