import React from "react";

function Button({ title, type, disabled, onChildClick }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={() => {
        onChildClick();
      }}
    >
      {title}
    </button>
  );
}

export default Button;
