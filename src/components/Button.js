import React from "react";

function Button({ btnType, type, children, disabled, onHandleClick }) {
  return (
    <button
      type={btnType}
      className={type}
      disabled={disabled}
      onClick={onHandleClick}
    >
      {children}
    </button>
  );
}

export default Button;
