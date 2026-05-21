import React from "react";
import "./Button.scss";

const Button = ({ title, onClick, disabled }) => {
  return (
    <button
      className="custom-btn"
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;