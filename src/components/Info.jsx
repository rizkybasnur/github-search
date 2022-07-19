import React from "react";
import Select from "./Select";

function Info({ query, setCount }) {
  return (
    <div className="pe-2">
      <div>Your results for: "{query}"</div>
      result per page: <Select setCount={setCount} />
    </div>
  );
}

export default Info;
