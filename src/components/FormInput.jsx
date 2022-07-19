import React from "react";

function FormInput({ query, setQuery }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
      />
      <button type="submit" style={{ marginLeft: "16px" }}>
        Search
      </button>
    </div>
  );
}

export default FormInput;
