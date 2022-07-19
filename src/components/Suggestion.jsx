import React from "react";

function Suggestion({ e, setQuery }) {
  return (
    <>
      {" "}
      <div
        key={e.id}
        className="hover cursor-pointer"
        onClick={() => {
          setQuery(e.name);
        }}
      >
        {e.name}
      </div>
    </>
  );
}

export default Suggestion;
