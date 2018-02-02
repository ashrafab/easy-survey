import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <p>working</p>
    </div>
  );
};

console.log('document.getElementById("app")', document.getElementById("app"));
ReactDOM.render(<App />, document.getElementById("app"));
