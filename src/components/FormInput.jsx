import React from "react";

function FormInput({ query, setQuery }) {
  return (
    <div className="flex justify-center">
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
      />
      <button type="submit" className="ml-16">
        Search
      </button>
    </div>
  );
}

export default FormInput;
