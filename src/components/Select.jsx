import React from "react";

function Select({ setCount }) {
  return (
    <select
      onChange={(e) => {
        setCount(e.target.value);
      }}
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
    </select>
  );
}

export default Select;
