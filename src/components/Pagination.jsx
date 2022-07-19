import React from "react";
import Button from "./Button";

function Pagination({ page, setPage, datas }) {
  return (
    <div className="mt-16">
      <Button
        title="Prev."
        disabled={page === 1}
        onChildClick={() => {
          setPage((page) => page - 1);
        }}
      />

      <span className="mx-16">{page}</span>

      <Button
        title="Next"
        disabled={datas.length < 5}
        onChildClick={() => {
          setPage((page) => page + 1);
        }}
      />
    </div>
  );
}

export default Pagination;
