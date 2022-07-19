import React from "react";

function Pagination({ page, setPage, datas }) {
  return (
    <div style={{ marginTop: "16px" }}>
      <button
        onClick={() => {
          setPage((page) => page - 1);
        }}
        disabled={page === 1}
      >
        Prev.
      </button>
      <span style={{ margin: "0 16px" }}>{page}</span>
      <button
        onClick={() => {
          setPage((page) => page + 1);
        }}
        disabled={datas.length < 5}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
