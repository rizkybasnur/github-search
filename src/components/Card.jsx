import React from "react";

function Card({ data, setDataId, setDialog }) {
  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid white",
        borderRadius: "8px",
        marginLeft: "8px",
        marginBottom: "8px",
        cursor: "pointer",
        minWidth: "300px",
      }}
      onClick={() => {
        setDialog(true);
        setDataId(data.id);
      }}
    >
      <div>Id: {data.id}</div>
      <div>Repository name: {data.name}</div>
      <div>
        Languange: <span></span>
        {data.language ?? "not specified"}
      </div>
    </div>
  );
}

export default Card;
