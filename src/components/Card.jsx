import React from "react";

function Card({ data, setDataId, setDialog }) {
  return (
    <div
      className="pa-16 border-white radius-8 ml-8 mb-8 cursor-pointer min-w-300"
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
