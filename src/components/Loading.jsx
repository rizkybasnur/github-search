import React from "react";

function Loading({ loading }) {
  return <>{loading && <div>Loading...</div>}</>;
}

export default Loading;
