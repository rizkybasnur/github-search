import React from "react";

function Banner({ reactLogo }) {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/github.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Github Repo Search</h1>
    </>
  );
}

export default Banner;
