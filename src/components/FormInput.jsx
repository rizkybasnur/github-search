import React from "react";
import Button from "./Button";

function FormInput({ query, setQuery }) {
  return (
    <div className="flex justify-center">
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
      />
      <Button type="submit" title="Search" className="ml-16" />
      {/* <button type="submit" className="ml-16">
        Search
      </button> */}
    </div>
  );
}

export default FormInput;
